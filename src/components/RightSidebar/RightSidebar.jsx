import React, { useState } from "react";
import styles from "./RightSidebar.module.css";
import * as Tabs from "@radix-ui/react-tabs";

import WidgetList from "./../CardWidgetList/WidgetList";
import SidebarHeader from "./SidebarHeader";
import SearchInput from "../SearchInput/SearchInput";
import FilterButtons from "./FilterButtons";

//import img
import img1 from "../../assets/imgwidget/Bubble Chart.png"
import img2 from "../../assets/imgwidget/Advertisement Widgets.png"
// import img3 from "../../assets/imgwidget/Average Age Chart.png"
import img4 from "../../assets/imgwidget/Header Slider Widget.png"
import img5 from "../../assets/imgwidget/Quick Links Widget.png"

export default function RightSidebar({ isOpen , onClose  }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  const template = [
    {
      id: "1",
      image: img1,
      title: "Bubble Chart",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut adipisci nostrum voluptas iusto. Sint facilis quisquam eveniet voluptatibus odit non accusamus expedita, nihil",
      typeWidget: "Informative Widgets",
    },
    {
      id: "2",
      image: img2,
      title: "Advertisement Widgets",
      description:
        "   Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit. Ut adipisci nostrum voluptas iusto. Sint facilis quisquam eveniet voluptatibus odit non accusamus expedita, nihil",
      typeWidget: "Informative Widgets",
    },
    // {
    //   id: "3",
    //   image: img3,
    //   title: "Average Age Chart",
    //   description:
    //     "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut adipisci nostrum voluptas iusto. Sint facilis quisquam eveniet voluptatibus odit non accusamus expedita, nihil",
    //   typeWidget: "Informative Widgets",
    // },
    {
      id: "4",
      image: img4,
      title: "Header Slider Widget",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut adipisci nostrum voluptas iusto. Sint facilis quisquam eveniet voluptatibus odit non accusamus expedita, nihil",
      typeWidget: "Statistics Widgets",
    },
    {
      id: "5",
      image: img5,
      title: "Quick Links Widget",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut adipisci nostrum voluptas iusto. Sint facilis quisquam eveniet voluptatibus odit non accusamus expedita, nihil",
      typeWidget: "Statistics Widgets",
    },
  ];
  const drafts = [
    {
      id: "1",
      image: img1,
      title: "Bubble Chart",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut adipisci nostrum voluptas iusto. Sint facilis quisquam eveniet voluptatibus odit non accusamus expedita, nihil",
      typeWidget: "Statistics Widgets",
    },
    {
      id: "2",
      image: img2,
      title: "Advertisement Widgets",
      description:
        "   Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit. Ut adipisci nostrum voluptas iusto. Sint facilis quisquam eveniet voluptatibus odit non accusamus expedita, nihil",
      typeWidget: "Statistics Widgets",
    },
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredWidgets = template.filter(
    (widget) =>
      widget.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedType === "All" || widget.typeWidget === selectedType)
  );

  const filteredDrafts = drafts.filter(
    (draft) =>
      draft.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedType === "All" || draft.typeWidget === selectedType)
  );

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <SidebarHeader onClose={onClose} />

      <div className={` ${styles.tabsidebar}`}>
        <Tabs.Root defaultValue="tab1">

          <Tabs.List className="d-flex justify-content-around ">
            <Tabs.Trigger value="tab1" className={`${styles.tabButton} ${styles.tabTrigger}`}>
              Template
            </Tabs.Trigger>
            <Tabs.Trigger value="tab2" className={`${styles.tabButton} ${styles.tabTrigger}`}>
              Drafts
            </Tabs.Trigger>
          </Tabs.List>

          <SearchInput value={searchTerm} onChange={handleSearchChange} />

          <FilterButtons
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            types={["All", "Informative Widgets", "Statistics Widgets"]}
            widgets={template}
          />
         <div className={styles.cardsWrapper}>
    <div className={styles.cardszone}>
      <Tabs.Content value="tab1">
        <WidgetList widgets={filteredWidgets} />
      </Tabs.Content>

      <Tabs.Content value="tab2">
        <WidgetList widgets={filteredDrafts} />
      </Tabs.Content>
    </div>
  </div>
        </Tabs.Root>
      </div>
    </div>
  );
}
