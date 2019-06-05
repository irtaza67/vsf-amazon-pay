// This object should represent structure of your modules Vuex state
// It's a good practice is to name this interface accordingly to the KET (for example mailchimpState)
export interface AmazonPayState {
  amazonPaymentsReady: boolean,
  orderReferenceId: string | null,
  // userId: string | null,
  userToken: string | null
}