import { useId, useState } from "react";
import "./style.scss";


export default function Collapse({ title, children }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className={open ? "collapse collapse--open" : "collapse"}>
      <h3 className="collapse__heading">
        <button
          type="button"
          className="collapse__button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          {title}
          <span className="collapse__chevron" aria-hidden="true" />
        </button>
      </h3>
      <div id={panelId} className="collapse__panel" aria-hidden={!open}>
        <div className="collapse__panel-inner">
          <div className="collapse__content">{children}</div>
        </div>
      </div>
    </div>
  );
}
