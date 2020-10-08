import Head from "next/head";
import {
  Button,
  Drawer,
  Spacer,
  Text,
  useDrawer,
  useToasts,
  Box,
  Tabs,
} from "suprim-ui";
import styles from "../styles/Home.module.css";

export default function Home() {
  const toast = useToasts();
  const [drawer1, toggleDrawer1] = useDrawer();
  const showtoast = () => {
    toast.add({ content: "The Evil Rabbit jumped over the fence." });
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Spacer></Spacer>
      <Drawer {...drawer1}>
        <h1>Drawer</h1>
      </Drawer>
      <Text as="h3" b align="center">
        Next App
      </Text>
      <Spacer></Spacer>
      <Box d="flex" alignItems="center" justifyContent="center">
        <Button onClick={showtoast}>Show Toast</Button>
        <Button type="button" onClick={toggleDrawer1}>
          Open Drawer
        </Button>
      </Box>
      <Tabs>
        <Tabs.Item label="tab 1">Tab 1</Tabs.Item>
        <Tabs.Item label="tab 2">Tab 2</Tabs.Item>
      </Tabs>
    </div>
  );
}
