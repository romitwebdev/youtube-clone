import React from "react";
import { GoKebabVertical } from "react-icons/go";
import { IconContext } from "react-icons";
import { ContextFunc } from "../../ContextProvider";

const Card = (): JSX.Element => {
    const { content } = ContextFunc();

    return (
        <>
            {/* content holder */}

            {content.map((cont) => {
                return (
                    <section className="card-holder" key={cont.id}>
                        <div className="card-img-holder">
                            <img src={cont.imgUrl} alt="" />
                            <span className="card-duration">
                                {cont.duration}
                            </span>
                        </div>
                        <div className="card-header-holder">
                            <div className="user-icon">
                                <img src={cont.imgUrl} alt="" />
                            </div>
                            <div className="title">
                                <h3>{cont.title}</h3>
                                <p>
                                    {cont.userId}{" "}
                                    <span>
                                        • {cont.views} views • {cont.days} days
                                        ago
                                    </span>
                                </p>
                            </div>
                            <IconContext.Provider
                                value={{ className: "kebab-menu" }}
                            >
                                <GoKebabVertical />
                            </IconContext.Provider>
                        </div>
                    </section>
                );
            })}
        </>
    );
};

export default Card;
