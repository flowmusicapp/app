export interface ProfileProps {
  recordID: string;
  thumbnailPath?: string;
  birthday?: any;
  familyName: string;
  givenName: string;
  jobTitle?: string;
  phoneNumbers: any;
  postalAddresses?: any;
  company?: string;
}
// phoneNumbers: Array<[{ label: string; number: any }]>;
//   postalAddresses?: Array<[{
//     city: string;
//     country: any;
//     label: any;
//     postCode: any;
//     state: string;
//     street: string;
//   }]>;
//   company?: string;
