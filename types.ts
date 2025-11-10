
export interface Test {
  name: string;
  code: string;
  amount: number;
}

export interface TestCategory {
  name: string;
  details: string;
}

export interface HealthPackage {
  name: string;
  totalTests: number;
  price: number;
  discountedPrice: number;
  categories: TestCategory[];
  isFeatured?: boolean;
}

export interface LabMachine {
  name: string;
  model: string;
  type: string;
  features: string[];
  testsPerHour: string;
  imageUrl: string;
}

export interface JobOpening {
  srNo: number;
  post: string;
  qualification: string;
  experience: string;
}
