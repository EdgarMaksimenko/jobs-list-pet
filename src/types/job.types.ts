export interface IJobList {
  id:              string;
  name:            string;
  email:           string;
  phone:           string;
  title:           string;
  salary:          string;
  address:         string;
  benefits:        Benefit[];
  location:        ILocation;
  pictures:        string[];
  createdAt:       Date;
  updatedAt:       Date;
  description:     string;
  employment_type: EmploymentType[];
}

export enum Benefit {
  FlexibleHours = "Flexible hours",
  PayVocations = "Pay vocations",
  Relocation = "Relocation",
}

export enum EmploymentType {
  FullTime = "Full time",
  PartTime = "Part time",
  Temporary = "Temporary",
}

export interface ILocation {
  lat:  number;
  long: number;
}