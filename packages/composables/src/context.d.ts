import { IntegrationContext } from '@vue-storefront/core';
import { ClientInstance, KiboCommerceMethods, Config } from '@vue-storefront/kibo-api';
// KiboApolloClient
declare module '@vue-storefront/core' {
  export interface Context {
    $kibo: IntegrationContext<ClientInstance, Config, KiboCommerceMethods>;
  }
}
