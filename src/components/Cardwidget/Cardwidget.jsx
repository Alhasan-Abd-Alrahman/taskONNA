// components/WidgetCard.jsx
import { useDraggable } from "@dnd-kit/core";
import { Box, Card, Flex, Text } from "@radix-ui/themes";
import styles from "./Cardwidget.module.css";

export default function WidgetCard({ widget, isDropped }) {
  const draggable = useDraggable({
    id: widget.id,
    data: { widget },
  });

  const { attributes, listeners, setNodeRef, transform } = draggable;

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
    cursor: isDropped ? "default" : "grab",
    width: isDropped ? "50px" : "100%", 
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <Box mb="4" maxWidth="100%">
      <Card size="2" className={styles.card}>
  <Flex gap="3" align="center">
    <img
      src={widget.image}
      alt={widget.title}
      className={styles.img}
    />
    <Box>
      <Text as="div" size="3" weight="bold">{widget.title}</Text>
      <Text as="div" size="2" color="gray" className={styles.description}>
        {widget.description}
      </Text>
      <Text as="div" className={styles.typeWidget}>{widget.typeWidget}</Text>
    </Box>
  </Flex>
</Card>
      </Box>
    </div>
  );
}














// // components/WidgetCard.jsx
// import { useDraggable } from "@dnd-kit/core";
// import { Box, Card, Flex, Text } from "@radix-ui/themes";
// import styles from "./Cardwidget.module.css";

// export default function WidgetCard({ widget }) {
//   // تفعيل خاصية السحب
//   const { attributes, listeners, setNodeRef, transform } = useDraggable({
//     id: widget.id,
//     data: { widget },
//   });

//   // إعدادات التحريك أثناء السحب
//   const style = {
//     transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
//     cursor: "grab",
//   };

//   return (
//     <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
//       <Box mb="4" maxWidth="100%">
//         <Card size="2">
//           <Flex gap="3">
//             <img
//               src={widget.image}
//               alt={widget.title}
//               className={styles.img}
//             />
//             <Box>
//               <Text as="div" size="3" weight="bold">{widget.title}</Text>
//               <Text as="div" size="2" color="gray" className={styles.description}>
//                 {widget.description}
//               </Text>
//             </Box>
//           </Flex>
//         </Card>
//       </Box>
//     </div>
//   );
// }










// // components/WidgetCard.jsx
// import { Box, Card, Flex, Text, Inset } from "@radix-ui/themes";
// import styles from "./Cardwidget.module.css"

// export default function WidgetCard({ widget }) {
//   return (
//     <Box mb="4" maxWidth="100%">
//       <Card size="2">
//         <Flex gap="3">
//           <img
//             src={widget.image}
//             alt={widget.title}
//             className={styles.img}
//           />
//           <Box>
//             <Text as="div" size="3" weight="bold">{widget.title}</Text>
//             <Text  as="div" size="2" color="gray" className={styles.description}>{widget.description}</Text>
//           </Box>
//         </Flex>
//       </Card>
//     </Box>
//   );
// }

  