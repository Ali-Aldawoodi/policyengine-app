import SearchParamNavButton from "../controls/SearchParamNavButton";
import style from "../style";
import useMobile from "./Responsive";

export default function BottomCarousel(props) {
  const { selected, options, bottomText } = props;
  const mobile = useMobile();
  const currentIndex = options.map((option) => option.name).indexOf(selected);
  const previous = options[currentIndex - 1] || {};
  const next = options[currentIndex + 1] || {};

  // Show the previous to the left, the current in the middle, and the next to the right

  return (
    <div
      style={{
        position: "absolute",
        bottom: mobile ? "25vh" : 0,
        display: "flex",
        height: 80,
        left: mobile ? 0 : "25%",
        width: mobile ? "100%" : "50%",
        alignItems: "center",
        backgroundColor: style.colors.WHITE,
        padding: 5,
        justifyContent: mobile ? "center" : "right",
        borderTop: "1px solid black",
      }}
    >
      {!mobile && (
        <p style={{ paddingLeft: 50, paddingTop: 20 }}>{bottomText}</p>
      )}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: mobile ? "center" : "right",
          padding: "10px 20px",
          gap: 20,
        }}
      >
        {previous.label ? (
          <SearchParamNavButton
            focus={previous.name}
            direction="left"
            style={{ width: 50, fontSize: 16 }}
          />
        ) : (
          <div style={{ width: 50 }} />
        )}
        {}
        {next.label ? (
          <SearchParamNavButton
            focus={next.name}
            direction="right"
            style={{ width: 50, fontSize: 16 }}
          />
        ) : (
          <div style={{ width: 60 }} />
        )}
      </div>
    </div>
  );
}
