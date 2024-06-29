import PropTypes from "prop-types";

const RecipeCarts = ({ saladRecipe }) => {
  const { name, image, recipe } = saladRecipe;

  return (
    <div className="text-center">

      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

    </div>
  );
};

RecipeCarts.propTypes = {
  saladRecipe: PropTypes.object,
};

export default RecipeCarts;
