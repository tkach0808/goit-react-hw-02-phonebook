import s from "./Section.module.css";

const Section = ({ title, children }) => (
  <section className={s.sectionWrp}>
    <h1 className="sectionTittle">{title}</h1>
    <div className="sectionContent">{children}</div>
  </section>
);
export default Section;
