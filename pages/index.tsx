import { Document } from 'prismic-javascript/types/documents';
import { Link, RichText } from 'prismic-reactjs';
import React, { ReactElement, useEffect, useState } from 'react';
import shopifyConfig from '../config/shopify';
import { resolveProducts } from '../lib/resolveProducts';
import { getProduct } from '../lib/shopify/storefront-data-hooks/src/api/operations';
import { Client } from '../prismic-configuration';
import Cart from '../src/components/Cart';
import SliceZone from '../src/components/SliceZone';
import ProductsSlider from '../src/ProductsSlider/Index';
import AnchorButton from 'react-anchor-link-smooth-scroll';
import { Button } from '../src/components/Shared';
import { useCart } from '../lib/shopify/storefront-data-hooks';
import { useUI } from '../src/components/ui/context';
import { useRouter } from 'next/router';

type IndexProps = {
  doc: Document;
};

const IndexPage = ({ doc }: IndexProps): ReactElement => {
  // console.log(doc);
  const cart = useCart();
  const { openSidebar } = useUI();
  const items = cart?.lineItems ?? [];
  const [attributes, setAttributes] = useState('');
  const router = useRouter();

  // Uncoment this out if you want to redirect to the main website on page load
  // useEffect(() => {
  //   router.replace('https://website.com');
  // }, []);

  useEffect(() => {
    document.querySelector("body").classList.add(`page-homepage`);
    var divList = document.querySelectorAll("div");
    divList.forEach(function (index, value) {
      if (index.id != '' ) {
        var id = index.id + value;
        index.setAttribute('id', id);
      } 
    });
    if (typeof window !== 'undefined' && typeof window.convert !== 'undefined') {
      var session_cookie = window.convert.getCookie('_conv_s');
      if (JSON.stringify(window.convert.currentData.experiments) != '{}' && session_cookie) {
        // Create a goal and change the id below
        var revenue_goal_id = process.env.NEXT_PUBLIC_CONVERT_GOAL_ID;

        var session_id = session_cookie.substring(
          session_cookie.lastIndexOf('sh:') + 3,
          session_cookie.lastIndexOf('*')
        );
        var type_of_visitor;
        if (window.convert.getUserData().browsing.returning == false) {
          type_of_visitor = '0';
        } else {
          type_of_visitor = '1';
        }
        var exp_list = [];
        var variation_list = [];
        var varID;
        if (window.convert.currentData) {
          var new_exp = window.convert.currentData.experiments;
          for (var expID in new_exp) {
            varID = new_exp[expID].variation_id;
            if (!exp_list.includes(window.convert.data.experiments[expID].id)) {
              exp_list.push(window.convert.data.experiments[expID].id);
              variation_list.push(varID);
            }
          }
        }
        // Pass the convert data to the cart to add attributes
        var attrs = `&attributes[__cid]=${window.convert.data.u_id}&attributes[__pid]=${
          window.convert.data.prj.id
        }&attributes[__vid]=${session_id}&attributes[__new]=${type_of_visitor}&&attributes[__ctry]=${
          window.convertData.geo.country
        }&attributes[__goals]=${revenue_goal_id}&attributes[__vars]=variation_list&attributes[__exps]=${exp_list}&attributes[__visitorSegments]=${JSON.stringify(
          window.convert.getVisitorSegments()
        )}`;
        setAttributes(attrs);
      }
    }
  }, []);
  return (
    <>
      <title>{RichText.asText(doc.data.page_title)}</title>
      <div className="relative font-sans overflow-x-hidden">
        {doc.data.cart_enabled ? (
          <>
            <div className="fixed bottom-6 right-6 z-20" onClick={openSidebar}>
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-white shadow-lg z-20 border-gray-100 border-solid border cursor-pointer">
                <img src="/cart-icon.svg" alt="" />
              </div>
            </div>
            <Cart />
          </>
        ) : (
          <></>
        )}
        <div id="Announcement" className="flex flex-col items-center justify-center">
          {RichText.asText(doc.data.promo_bar).length ? (
            <div className="w-full py-2 bg-primary-2 items-center justify-center flex px-2 text-center">
              <span className="text-white tracking-wider text-sm font-sans font-black">
                {RichText.asText(doc.data.promo_bar)}
              </span>
            </div>
          ) : (
            <></>
          )}
          {doc?.data && (
            <SliceZone doc={doc} sliceZone={doc?.data.body} cartAttributes={attributes} />
          )}
          <div id="Footer" className="w-full flex px-12 py-4 flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-between bg-black text-white">
            <div className="flex flex-col items-center justify-center md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
              <img src={doc.data.brand_logo.medial} className="w-12 md:w-24 h-auto md:mr-12" />
              {RichText.asText(doc.data.footer_copyright)}
            </div>
            <div className="space-x-4">
              {doc.data.footer_links.map((footer_link) => (
                <a
                  className="font-sans font-medium"
                  href={Link.url(footer_link.link_url)}
                  target={footer_link.link_url.target}>
                  {RichText.asText(footer_link.link_title)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

IndexPage.getInitialProps = async (ctx) => {
  const req = ctx.req;
  const doc = await Client(req).getByUID('page', 'homepage', {});
  return {
    doc
  };
};

export default IndexPage;
