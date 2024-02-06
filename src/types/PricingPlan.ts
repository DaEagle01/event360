export type TFeature = {
  name: string;
  exists: boolean;
};

export type TPricingPlan = {
  name: string;
  price: number;
  description: string;
  recommended: boolean;
  features: TFeature[];
};
