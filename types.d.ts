interface IConvert {
  $: Function<e, t>;
  assignVariation: Function;
  currentData: {
    goals: Object;
    experiments: Object;
    experiment_goals: Object;
  };
  getCookie: Function<b>;
  getUserData: Function;
  data: {
    u_id: string;
    sepcgoals: Object;
    segments: Array;
    comparisons: Object;
    eclean: Array;
    entities: Object;
    goals: Object;
    experiments: Object;
    prj: {
      utc_of: string;
      extset: {
        d_anon: 'true' | 'false';
        autlnk: 'true' | 'false';
        dnt: '0' | '1';
        ecommerce: Number;
        gaUa: Array;
        gdprw: 'true' | 'false';
        maxordv: Number;
        mindays: Number;
        minordv: Number;
      };
      asoc_domains: Object;
      domains: Object;
      domainsCount: Number;
      global_d: { js: string; css: string };
      id: string;
      name: string;
    };
  };
  getVisitorSegments: Function;
}

interface Window {
  convert: IConvert;
  convertData: any;
}
