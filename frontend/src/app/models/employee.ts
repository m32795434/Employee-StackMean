export interface Employee {
  // the last 2 are opcional.
  _id: string;
  name: string;
  position: string;
  office: string;
  salary: number;
  createdAt?: string;
  aupdatedAt?: string;
}
