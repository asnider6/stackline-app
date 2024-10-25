import { ProductInterface } from "./types";

interface ProductInfoProps {
  data: ProductInterface;
}

const ProductInfo = ({ data }: ProductInfoProps) => {
  return (
    <div style={styles.container}>
      <div style={styles.topSection}>
        <img style={styles.image} src={data.image} />
        <div style={styles.title}>{data.title}</div>
        <div style={styles.subtitle}>{data.subtitle}</div>
      </div>
      <div style={styles.tagsContainer}>
        {data.tags.map((tag) => {
          return (<div style={styles.tag}>{tag}</div>)
        })}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    "flex-direction": "column",
    height: "100vh",
    "background-color": "white",
    margin: "2rem",
    paddingTop: "1rem",
    "border-radius": "6px"
  },
  topSection: {
    display: "flex",
    "flex-direction": "column",
    "justify-content": "flex-start",
    "align-items": "center",
    "padding-bottom": "1rem",
    "border-bottom": "1px solid #eee",
  },
  image: {
    height: "10rem",
    width: "10rem",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
  subtitle: {
    "text-align": "center",
    color: "#aaa",
  },
  tagsContainer: {
    display: "flex",
    "flex-direction": "row",
    "flex-wrap": "wrap",
    "padding": "1rem",
    "border-bottom": "1px solid #eee",
  },
  tag: {
    padding: "0.25rem 1.5rem",
    "margin-right": "1rem",
    "margin-bottom": "0.5rem",
    border: "1px solid #ddd",
    "border-radius": "6px",
  }
};

export default ProductInfo;
