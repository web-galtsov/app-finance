import React from "react";
import { motion } from "framer-motion";

const Wrapper = (props) => {
   return <span className="BannerTitleHome">{props.children}</span>;
};
const tagMap = {
    paragraph: "h5",
    heading1: "h1",
    heading2: "p"
};

const AnimatedCharacters = (props) => {
    const item = {
        hidden: {
            opacity: 0,
            x: "-100%",
            color: "#3a3a3a",
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
        },
        visible: {
            x: 0,
            color: "#fff",
            opacity: 1,
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
        }
    };
  const splitWords = props.text.split(" ");
    const words = [];
    for (const [, item] of splitWords.entries()) {
        words.push(item.split(""));
    }
    words.map((word) => {
        return word.push("\u00A0");
    });
    const Tag = tagMap[props.type];

    return (
        <Tag>
      <span
          style={{
              overflow: "hidden",
              display: "inline-block"
          }}
      >
        <motion.span style={{ display: "inline-block" }} variants={item}>
          {words}
        </motion.span>
      </span>
            {words.map((word, index) => {
                return (
                    <Wrapper key={index}>
                        {words[index].flat().map((element, index) => {
                            return (
                                <span
                                    style={{
                                        overflow: "hidden",
                                        display: "inline-block"
                                    }}
                                    key={index}
                                >
                                  <motion.span
                                      style={{ display: "inline-block" }}
                                      variants={item}>
                                    {element}
                                  </motion.span>
                              </span>
                            );
                        })}
                    </Wrapper>
                );
            })}
        </Tag>
    );
};

export default AnimatedCharacters;
