import styles from "./Education.module.css";

export const Education = ({ data }) => {
  return (
    <div className={`container ${styles.EducationContainer}`}>
      <div className={styles.EducationWrapper}>
        <section id="education" className={styles.EducationItem}>
          <h2 className={`text-6 line-6 sectionTitlBbefore`}>{data.title}</h2>
          <div>
            {data.items.map((item, idx) => (
              <div key={idx}>
                <h3 className="text-4 line-4">{item.degree}</h3>
                <p className="text-3 line-3">{item.institution}</p>
                <p className="text-3 line-3">{item.year}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
