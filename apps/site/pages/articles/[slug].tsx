import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

/* eslint-disable-next-line */
interface ArticleProps extends ParsedUrlQuery {
  slug: string;
}

export function Article(props: ArticleProps) {
  return (
    <div>
      <h1>Visiting {props.slug}</h1>
    </div>
  );
}

export default Article;

export const getStaticProps: GetStaticProps<ArticleProps> = async ({
  params,
}: {
  params: ArticleProps;
}) => {
  return {
    props: {
      slug: params.slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths<ArticleProps> = async () => {
  return {
    paths: [1, 2, 3].map((idx) => {
      return {
        params: {
          slug: `page${idx}`,
        },
      };
    }),
    fallback: false,
  };
};
