import styles from "./OurMenu.module.css";
import SearchIcon from "./../../assets/icons/search-svgrepo.svg";
import FilterIcon from "./../../assets/icons/filter-svgrepo.svg";

function OurMenu() {
  return (
    <div className={styles.body_ourmenu}>
      <div className={styles.ourmenu}>
        <div className="conta">
          <div className="row">
            <div className="col-md-6">
              <div className={styles.menu_ourmenu}>
                <h2>NOSSO CARDÁPIO</h2>

                <div className={styles.button_ourmenu}>
                  <button className={styles.filter_menu}>Todas (170)</button>
                  <button className={styles.filter_menu}>
                    Brasileira (41)
                  </button>
                  <button className={styles.filter_menu}>Italiana (25)</button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.search_box}>
                <div className={styles.div_search}>
                <input
                  type="text"
                  className={styles.search_text}
                  placeholder="Procure sua favorita"
                ></input>
                <img src={SearchIcon} className={styles.Menu_Icon}></img>
                </div>
                <img src={FilterIcon} className={styles.Filter_Icon}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMenu;
