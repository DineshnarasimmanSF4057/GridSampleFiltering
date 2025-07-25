// Sample Data Source
export const loanData: LoanData[] = [
  {
    status: 'Closed',
    name: 'Cypress Creek Office',
    receivedDate: new Date('2025-02-19'),
    affiniusLead: 'Mark Lee',
    country: 'USA',
    currency: 'USD',
    loanAmt: 23400000,
    propertyType: 'Hotel',
    city: 'Cedar Park',
    comments: 'Loan closed successfully.',
  },
  {
    status: 'Lender Selected',
    name: 'Lamar Flats',
    receivedDate: new Date('2025-01-14'),
    affiniusLead: 'Anna Smith',
    country: 'Canada',
    currency: 'CAD',
    loanAmt: 15000000,
    propertyType: 'Data Center',
    city: 'Austin',
    comments: 'Lender has been selected.',
  },
  {
    status: 'Lender Selected',
    name: 'Tech Park Plaza',
    receivedDate: new Date('2025-03-14'),
    affiniusLead: 'Samantha Chon',
    country: 'USA',
    currency: 'USD',
    loanAmt: 32500000,
    propertyType: 'Data Center',
    city: 'Austin',
    comments: 'Awaiting formal offer.',
  },
  // Additional sample records
  {
    status: 'Closed',
    name: 'River Bend Mall',
    receivedDate: new Date('2024-11-10'),
    affiniusLead: 'John Doe',
    country: 'UK',
    currency: 'GBP',
    loanAmt: 50000000,
    propertyType: 'Retail',
    city: 'London',
    comments: 'Loan finalized in agreement with conditions.',
  },
  {
    status: 'Actively Marketing',
    name: 'Greenwood Offices',
    receivedDate: new Date('2025-04-05'),
    affiniusLead: 'Jane Roe',
    country: 'USA',
    currency: 'USD',
    loanAmt: 21000000,
    propertyType: 'Office',
    city: 'Dallas',
    comments: 'Currently marketing for suitable offers.',
  },
  {
    status: 'Actively Marketing',
    name: 'Blue Lagoon Resort',
    receivedDate: new Date('2025-02-20'),
    affiniusLead: 'Emily Clark',
    country: 'Australia',
    currency: 'AUD',
    loanAmt: 75000000,
    propertyType: 'Hotel',
    city: 'Sydney',
    comments: 'Engaging with multiple potential lenders.',
  },
  {
    status: 'Dead',
    name: 'Maple Apartments',
    receivedDate: new Date('2024-12-01'),
    affiniusLead: 'Mike Brown',
    country: 'USA',
    currency: 'USD',
    loanAmt: 30000000,
    propertyType: 'Residential',
    city: 'Seattle',
    comments: 'No viable options, loan process terminated.',
  },
  {
    status: 'Lender Selected',
    name: 'Silver Creek Spa',
    receivedDate: new Date('2025-01-29'),
    affiniusLead: 'Susan Green',
    country: 'Canada',
    currency: 'CAD',
    loanAmt: 12000000,
    propertyType: 'Resort',
    city: 'Vancouver',
    comments: 'Lender selected, formalities in progress.',
  },
  {
    status: 'Closed',
    name: 'Emerald Tower',
    receivedDate: new Date('2025-03-11'),
    affiniusLead: 'Patrick Snow',
    country: 'Germany',
    currency: 'EUR',
    loanAmt: 67000000,
    propertyType: 'Office',
    city: 'Berlin',
    comments: 'Closing process completed successfully.',
  },
  {
    status: 'Actively Marketing',
    name: 'Sunny Acres Plaza',
    receivedDate: new Date('2025-03-25'),
    affiniusLead: 'Laura Knight',
    country: 'USA',
    currency: 'USD',
    loanAmt: 28000000,
    propertyType: 'Retail',
    city: 'Miami',
    comments: 'Multiple lender proposals under review.',
  },
];

// Assume LoanData model is structured similarly
export interface LoanData {
  status: string;
  name: string;
  receivedDate: Date;
  affiniusLead: string;
  country: string;
  currency: string;
  loanAmt: number;
  propertyType: string;
  city: string;
  comments: string;
}
