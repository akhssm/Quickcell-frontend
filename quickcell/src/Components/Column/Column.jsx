import React from "react";
import styles from "../Column/Column.module.css";
import AddIcon from "../../assets/add.svg"; // Use correct relative path
import ThreeDots from "../../assets/3dotmenu.svg"; // Ensure correct path for this SVG
import DoneIcon from "../../assets/Done.svg";
import InProgressIcon from "../../assets/in-progress.svg";
import CancelledIcon from "../../assets/Cancelled.svg";
import TodoIcon from "../../assets/To-do.svg";
import BacklogIcon from "../../assets/Backlog.svg";
import NoPriorityIcon from "../../assets/No-priority.svg";
import LowPriorityIcon from "../../assets/Img - Low Priority.svg";
import MediumPriorityIcon from "../../assets/Img - Medium Priority.svg";
import HighPriorityIcon from "../../assets/Img - High Priority.svg";
import UrgentIcon from "../../assets/SVG - Urgent Priority colour.svg";

import AvatarWithStatus from "../Card/Avatar/Avatar";
import FeatureRequestCard from "../Card/featureCard";

// Mapping the status titles to their corresponding SVGs
const icons = {
  Done: <img src={DoneIcon} alt="Done" className={styles.icon} />,
  "In progress": <img src={InProgressIcon} alt="In Progress" className={styles.icon} />,
  Canceled: <img src={CancelledIcon} alt="Canceled" className={styles.icon} />,
  Todo: <img src={TodoIcon} alt="To-Do" className={styles.icon} />,
  Backlog: <img src={BacklogIcon} alt="Backlog" className={styles.icon} />,
  "No priority": <img src={NoPriorityIcon} alt="No Priority" className={styles.icon} />,
  Low: <img src={LowPriorityIcon} alt="Low Priority" className={styles.icon} />,
  Medium: <img src={MediumPriorityIcon} alt="Medium Priority" className={styles.icon} />,
  High: <img src={HighPriorityIcon} alt="High Priority" className={styles.icon} />,
  Urgent: <img src={UrgentIcon} alt="Urgent" className={styles.icon} />,
};

// Define getStatusIcon function to return the correct icon
const getStatusIcon = (status) => {
  console.log("Status being passed:", status); // Debugging log
  return icons[status] || null; // Return the icon for the given status or null if not found
};

const Column = ({ title, tickets, ordering, grouping }) => {
  const icon = getStatusIcon(title); // Get the icon based on the title/status
  console.log("Icon rendered:", icon); // Debugging log

  return (
    <div className={styles.column}>
      <div className={styles.leftview}>
        {/* Display status icon or avatar depending on grouping */}
        <div className={styles.icon_status}>
          {grouping !== undefined && grouping === "user" ? (
            <AvatarWithStatus
              statusColor={"green"}
              grouping={grouping}
              indashBoard={grouping === "user"}
            />
          ) : (
            icon // Dynamically render icon
          )}
        </div>

        <div className={styles.name_label}>
          <h5>{title}</h5>
          <h5 className="heading">{tickets.length}</h5>
        </div>

        <div className={styles.icon_buttons}>
          <img src={AddIcon} alt="Add" className={styles.icon} />
          <img src={ThreeDots} alt="Options" className={styles.icon} />
        </div>
      </div>

      <div className={styles.card_container}>
        {tickets?.map((ticket, i) => (
          <FeatureRequestCard
            key={i}
            id={ticket.id}
            tag={ticket.tag.join("")}
            title={ticket.title}
            grouping={grouping}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
