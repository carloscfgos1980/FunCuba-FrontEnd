const reviews = ({ feedback }: any) => {
  const stars = (points: number) => {
    if (points === 1) {
      return "⭐";
    } else if (points === 2) {
      return "⭐ ⭐";
    } else if (points === 3) {
      return "⭐ ⭐ ⭐";
    } else if (points === 4) {
      return "⭐ ⭐ ⭐ ⭐";
    } else {
      return "⭐ ⭐ ⭐ ⭐ ⭐";
    }
  };
  return (
    <div className="align-items-stretch">
      <h3 className="text-center">{stars(feedback.rate)}</h3>
      <p style={{ height: "100px" }}>{feedback.comment}</p>
      <div className="mt-4">
        <h4>{`${feedback.author} (${feedback.country})`}</h4>
      </div>
    </div>
  );
};

export default reviews;
