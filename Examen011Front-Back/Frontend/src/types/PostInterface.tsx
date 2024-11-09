export interface PostInterface {
  id: number;
  name: string;
  lastName: string;
  age: number
}

export interface PostCardProps {
  postData: PostInterface;
}
