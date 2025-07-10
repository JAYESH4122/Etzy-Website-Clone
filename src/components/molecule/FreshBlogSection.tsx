import blogData from '../../data/data.json';
import type { BlogSectionData } from '../../types/datatypes';

const FreshBlogSection = () => {
  const data: BlogSectionData = blogData;

  return (
    <div className="fresh-blog-section-container">
      <div className="fresh-blog-title">
        <h2>{data.sectionTitle}</h2>
        <div className="fresh-blog-title-arrow"></div>
      </div>
      <ul className="fresh-from-blog-list">
        {data.posts.map((post) => (
          <li key={post.id} className="fresh-from-blog-list-item">
            <div className="blog-wrapper">
              <div className="blog-image-container">
                <img
                  loading="lazy"
                  src={post.imageUrl}
                  alt={post.altText || ''}
                />
              </div>
              <div className="blog-content-wrapper">
                <p>{post.category}</p>
                <p>{post.title}</p>
                <p>
                  <span>{post.description}</span>
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FreshBlogSection;