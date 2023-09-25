import * as components from '../index';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    TButton: typeof components.Button;
    TIcon: typeof components.Icon;
  }
}

export {};
