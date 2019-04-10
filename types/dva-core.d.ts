export function create(...args: any[]): any;

// import {
//   Dispatch,
//   MiddlewareAPI,
//   Reducer,
//   ReducersMapObject,
//   StoreEnhancer,
//   Action as RAction,
//   Store,
// } from 'redux';

// export {
//   Store,
// }

// export interface Action<T = any> extends RAction {
//   payload?: T;
// }

// export interface OnAction {
//   (api: MiddlewareAPI<any>): void;
// }

// export interface OnReducer {
//   (reducer: Reducer<any>): void;
// }

// export interface Hooks {
//   onError?(error: Error, dispatch: Dispatch<any>): void;
//   onAction?: OnAction | OnAction[];
//   onStateChange?(): void;
//   onReducer?: OnReducer;
//   onEffect?(): void;
//   onHmr?(): void;
//   extraReducers?: ReducersMapObject;
//   extraEnhancers?: StoreEnhancer<any>[];
// }

// export interface EffectsCommandAPI {
//   put<A extends Action<any>>(action: A): void;
//   call<T = any, R = any>(service: (parameters: T) => Promise<R>, parameters: T): R;
//   select<S = Record<string, any>, R = any>(getState: (state: S) => R): R;
//   take(effectName: string): void;
//   cancel(effectName: string): void;
// }

// export interface SubscriptionAPI {
//   dispatch: Dispatch<any>;
// }

// export interface RouterAPI {
//   app: DvaInstance;
// }

// export type ReducersMapObjectWithEnhancer = [ReducersMapObject, OnReducer];
// export type Effect = (action: Action<any>, effects: EffectsCommandAPI) => void;
// export type EffectType = 'takeEvery' | 'takeLatest' | 'watcher' | 'throttle';
// export type EffectWithType = [Effect, { type: EffectType }];
// export type EffectsMapObject = Record<string, Effect | EffectWithType>;
// export type Subscription = (api?: SubscriptionAPI) => void;
// export type SubscriptionsMapObject = Record<string, Subscription>;
// export type Router = (api?: RouterAPI) => JSX.Element | object;

// export type Options = Hooks & {
//   initialState?: object;
//   history?: object;
// };

// export interface Model {
//   namespace: string;
//   state: any;
//   reducers?: ReducersMapObject | ReducersMapObjectWithEnhancer;
//   effects?: EffectsMapObject;
//   subscriptions?: SubscriptionsMapObject;
// }

// export interface DvaInstance {
//   /**
//    * Register an object of hooks on the application.
//    *
//    * @param hooks
//    */
//   use(hooks: Hooks): void;

//   /**
//    * Register a model.
//    *
//    * @param model
//    */
//   model(model: Model): void;

//   /**
//    * Unregister a model.
//    *
//    * @param namespace
//    */
//   unmodel(namespace: string): void;

//   /**
//    * Config router. Takes a function with arguments { history, dispatch },
//    * and expects router config. It use the same api as react-router,
//    * return jsx elements or JavaScript Object for dynamic routing.
//    *
//    * @param router
//    */
//   router(router: Router): void;

//   /**
//    * Start the application. Selector is optional. If no selector
//    * arguments, it will return a function that return JSX elements.
//    *
//    * @param selector
//    */
//   start(selector?: HTMLElement | string): any;

//   /**
//    * Get redux store for Privider.
//    *
//    * @return store
//    */
//   // getStore<T = any>(): Store<T, Action>;
// }

// export function create(options?: Options): DvaInstance;
