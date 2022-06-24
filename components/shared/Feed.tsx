import { Post } from '@/components/shared/';

interface FeedData {
  id: number;
  url: string;
  image: string;
  category: { name: string; color: string }[];
  title: string;
  excerpt: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
}

const Feed = () => {
  const data: FeedData[] = [
    {
      id: 1,
      url: '/',
      image: 'https://typeset.io/resources/content/images/2021/07/97.jpeg',
      category: [
        { name: 'Public', color: 'blue' },
        { name: 'Entire Campus', color: 'green' },
        { name: 'Info', color: 'grape' },
      ],
      title: 'Welcome to IIT Guwahati',
      excerpt: `Indian Institute of Technology Guwahati, the sixth member of the IIT fraternity, was established in 1994. The academic programme of IIT Guwahati commenced in 1995`,
      date: 'Feb 6th',
      author: {
        name: 'Elsa Brown',
        avatar:
          'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      },
    },
    {
      id: 2,
      url: '/',
      image:
        'https://www.sentinelassam.com/wp-content/uploads/2019/01/22027956-1538912168011.jpeg',
      category: [
        { name: 'Alcheringa', color: 'blue' },
        { name: 'Entire Campus', color: 'green' },
        { name: 'Info', color: 'grape' },
      ],
      title: 'Annual Cultural Festival of IIT Guwahati',
      excerpt: `Alcheringa is the annual cultural festival of the Indian Institute of
    Technology, Guwahati. A splendid idea realised by a group of students in 1996
    at IITG.`,
      date: 'Feb 6th',
      author: {
        name: 'Elsa Brown',
        avatar:
          'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      },
    },
  ];

  return (
    <>
      {data.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default Feed;
