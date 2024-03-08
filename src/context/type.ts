export type Message = {
  role: "user" | "system";
  content: string;
};

export type Manual = {
  title: string;
  content: string;
};

export type ResponseData = {
  manuals: Manual[];
};
