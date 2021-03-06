import React, { FC, useMemo } from 'react';

export interface State {
  displaySidebar: boolean;
  displayDropdown: boolean;
  displayModal: boolean;
  displayToast: boolean;
  modalView: string;
  toastText: string;
}

const initialState = {
  displaySidebar: false,
  displayDropdown: false,
  displayModal: false,
  modalView: 'LOGIN_VIEW',
  displayToast: false,
  toastText: ''
};

type Action =
  | {
      type: 'OPEN_SIDEBAR';
    }
  | {
      type: 'CLOSE_SIDEBAR';
    }
  | {
      type: 'OPEN_TOAST';
    }
  | {
      type: 'CLOSE_TOAST';
    }
  | {
      type: 'SET_TOAST_TEXT';
      text: ToastText;
    }
  | {
      type: 'OPEN_DROPDOWN';
    }
  | {
      type: 'CLOSE_DROPDOWN';
    }
  | {
      type: 'OPEN_MODAL';
    }
  | {
      type: 'CLOSE_MODAL';
    }
  | {
      type: 'SET_MODAL_VIEW';
      view: MODAL_VIEWS;
    };

type MODAL_VIEWS = 'SIGNUP_VIEW' | 'LOGIN_VIEW' | 'FORGOT_VIEW';
type ToastText = string;

export const UIContext = React.createContext<State | any>(initialState);

UIContext.displayName = 'UIContext';

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case 'OPEN_SIDEBAR': {
      return {
        ...state,
        displaySidebar: true
      };
    }
    case 'CLOSE_SIDEBAR': {
      return {
        ...state,
        displaySidebar: false
      };
    }
  }
}

export const UIProvider: FC = (props) => {
  const [state, dispatch] = React.useReducer(uiReducer, initialState);
  const openSidebar = () => dispatch({ type: 'OPEN_SIDEBAR' });
  const closeSidebar = () => dispatch({ type: 'CLOSE_SIDEBAR' });
  const toggleSidebar = () =>
    state.displaySidebar ? dispatch({ type: 'CLOSE_SIDEBAR' }) : dispatch({ type: 'OPEN_SIDEBAR' });
  const closeSidebarIfPresent = () => state.displaySidebar && dispatch({ type: 'CLOSE_SIDEBAR' });
  const value = useMemo(
    () => ({
      ...state,
      openSidebar,
      closeSidebar,
      toggleSidebar,
      closeSidebarIfPresent
    }),
    [state]
  );
  return <UIContext.Provider value={value} {...props} />;
};

export const useUI = () => {
  const context = React.useContext(UIContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};

export const ManagedUIContext: FC = ({ children }) => <UIProvider>{children}</UIProvider>;
