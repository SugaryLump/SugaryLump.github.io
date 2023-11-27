import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  Image,
} from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { MaterialIcons } from "@expo/vector-icons";
import reactDom from "react-dom";

const isHorizontalScreen = () => {
  return Dimensions.get("window").width > Dimensions.get("window").height;
};

const Card = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Pressable
      style={isExpanded ? styles.cardExpanded : styles.card}
      onPress={() => setIsExpanded(!isExpanded)}
    >
      {props.children}
    </Pressable>
  );
};

const tagColors = {
  yellow: "#a87f32",
  grey: "#2b2b2b",
  teal: "#027046",
  purple: "#2c1b42",
  orange: "#a35527",
  blue: "#242f6e",
  lightBlue: "#28706b",
  pink: "#943e66",
  green: "#1d3d18",
  brown: "#38281f",
  red: "#6b0d0d",
  neonGreen: "#205700",
  jetBlue: "#222745",
  salmon: "#803b32",
  lightGrey: "#666666",
};

const Tag = (props) => {
  return (
    <View
      style={[styles.tagContainer, { backgroundColor: tagColors[props.color] }]}
    >
      <Text style={[styles.tagText, styles.white]}>
        <b>{props.name}</b>
      </Text>
    </View>
  );
};

//TODO: Add gifs and images
//TODO: CG visualizer, LI4

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Daydream: require("./assets/fonts/Daydream.ttf"),
    Rubik: require("./assets/fonts/Rubik-VariableFont_wght.ttf"),
  });

  return (
    <View style={[styles.container, styles.lightRedBG]}>
      <View style={[styles.header]}>
        <img src={require("./assets/logo.png")} style={styles.logo}></img>
        <Text style={[styles.pixel, styles.white, styles.logoText]}>
          SugaryLump
        </Text>
        <hr style={styles.ruler} />
        <View style={{ gap: "20px", padding: "5%" }}>
          <Text style={[styles.headerText, styles.white]}>
            Hello! My name is Alexandre Flores, I'm 22 and I'm currently
            studying IT in Portugal, at{" "}
            <a style={styles.link} href="https://www.uminho.pt/PT">
              Universidade do Minho
            </a>
            . I am very passionate about video game design and programming, and
            have been working on pet projects in these areas from as early as
            high school.
          </Text>
          <Text style={[styles.headerText, styles.white]}>
            In my free time, I like to nourish my creativity and game
            development skills by trying all sorts of different games and
            working on small personal projects. I am a perfectionist, and
            nothing brings me more joy than designing and implementing
            satisfying game mechanics that synergize with themselves and with
            players.
          </Text>
          <Text style={[styles.headerText, styles.white]}>
            I have finished my 3 year degree in computer engineering and I'm
            currently finishing my master's in computer graphics. This involves
            developing a thesis on water buoyancy simulation in real time and
            developing an internal project with{" "}
            <a style={styles.link} href="https://www.keep.pt/en">
              KEEP Solutions
            </a>
            .
          </Text>
          <Text style={[styles.headerText, styles.white]}>
            Below you'll find my contact links, as well as some of the projects
            I'm most proud to have worked on over the years. You can click any
            card to expand it.
          </Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row", gap: "50px" }}>
          <a href="https://github.com/sugarylump" style={styles.link}>
            <AntDesign
              name="github"
              size={48}
              color={colors.background}
            ></AntDesign>
          </a>
          <a href="mailto:alexcarvalhoflores@gmail.com" style={styles.link}>
            <MaterialIcons
              name="email"
              size={48}
              color={colors.background}
            ></MaterialIcons>
          </a>
          <a
            href="https://www.linkedin.com/in/alexandre-flores-243550185?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B6FuCrRecT8mNsRGc8LgTVA%3D%3D"
            style={styles.link}
          >
            <AntDesign
              name="linkedin-square"
              size={48}
              color={colors.background}
            ></AntDesign>
          </a>
        </View>
        <hr style={styles.ruler} />
      </View>
      <View style={styles.cardsContainer}>
        <Card name="sample">
          <Text style={[styles.projectName, styles.white]}>
            <b>DEFILER (2023)</b>
          </Text>
          <View style={styles.tagsContainer}>
            <Tag name="Personal" color="yellow" />
            <Tag name="Unity" color="grey" />
            <Tag name="C#" color="teal" />
            <Tag name="Game development" color="purple" />
          </View>
          <View
            style={{
              borderWidth: 2,
              borderColor: colors.darkAccent,
              borderRadius: 5,
              overflow: "hidden",
            }}
          >
            <img
              src={require("./assets/projects/defiler/logo.png")}
              style={styles.projectImage}
            />
          </View>
          <Text style={[styles.projectDescription, styles.white]}>
            <b>DEFILER of Death's Garden</b> is an adventure game entirely
            designed over two days with the intent of publishing a small scale
            game for experience. It was originally conceived for a Halloween
            2023 Game Jam, but as other projects and responsibilities piled up
            at the time, it is still in active development.
            <p />
            As it is my latest game development project, it utilizes all that
            I've learned about game programming over the years. Of note, this
            project involved implementing custom movement behaviour (using only
            Unity's built-in collision), controlling animation state machines,
            dynamic object loading and unloading for performance, and a robust
            and easily customizable cutscene engine.
            <p />
            It is a sidescrolling adventure game meant to be beaten in 20-30
            minutes with a focus on satisfying and unique controls, unique and
            interesting challenges (puzzles, platforming, boss fights), and a
            minimalistic yet intriguing narrative.
            <p />
            The project page can be found at{" "}
            <a style={styles.link} href="https://sugarylump.itch.io/defiler">
              my itch.io
            </a>
            . Development is expected to finish within 2023.
          </Text>
          <View
            style={{
              borderWidth: 2,
              borderColor: colors.darkAccent,
              borderRadius: 5,
              overflow: "hidden",
            }}
          >
            <img
              src={require("./assets/projects/defiler/demo.gif")}
              style={styles.projectImage}
            />
          </View>
        </Card>
        <Card>
          <Text style={[styles.projectName, styles.white]}>
            <b>Eternal Light (2022)</b>
          </Text>
          <View style={styles.tagsContainer}>
            <Tag name="Personal" color="yellow" />
            <Tag name="Unity" color="grey" />
            <Tag name="C#" color="teal" />
            <Tag name="Game development" color="purple" />
          </View>
          <View
            style={{
              borderWidth: 2,
              borderColor: colors.darkAccent,
              borderRadius: 5,
              overflow: "hidden",
            }}
          >
            <img
              src={require("./assets/projects/eternallight/eternallight.png")}
              style={styles.projectImage}
            />
          </View>
          <Text style={[styles.projectDescription, styles.white]}>
            <b>Eternal Light</b> is a passion project that has served as a "lab
            rat" of sorts for learning game development and programming. It is a
            project that has accompanied and evolved with me from as soon as I
            decided I wanted to pursue game development. As I have grown, it has
            gone through many different names, concepts, and even engines as I
            learned and pursued new skills in all areas of game development.
            <p />
            Due to its prospected scale, solo development would be a huge
            undertaking, and as such its current iteration exists as finished
            controls prototype in Unity for what will one day become a 2D
            Metroidvania. The focus of this prototype was developing a fast
            paced, movement oriented, satisfying control scheme, heavily
            inspired by{" "}
            <a href="https://www.hollowknight.com/" style={styles.link}>
              Hollow Knight
            </a>
            . This control scheme was also implemented in a modular fashion,
            such that key player abilities could be easily changed globally from
            a game design standpoint or in game via player choice (i.e. an
            upgrade system).
          </Text>
          <View
            style={{
              borderWidth: 2,
              borderColor: colors.darkAccent,
              borderRadius: 5,
              overflow: "hidden",
            }}
          >
            <img
              src={require("./assets/projects/eternallight/demo.gif")}
              style={styles.projectImage}
            />
          </View>
        </Card>
        <Card>
          <Text style={[styles.projectName, styles.white]}>
            <b>Comic Shader (2023)</b>
          </Text>
          <View style={styles.tagsContainer}>
            <Tag name="Academic" color="blue" />
            <Tag name="Graphics" color="pink" />
            <Tag name="GLSL" color="green" />
          </View>
          <View
            style={{
              borderWidth: 2,
              borderColor: colors.darkAccent,
              borderRadius: 5,
              overflow: "hidden",
            }}
          >
            <img
              src={require("./assets/projects/shader/MAN(1).png")}
              style={styles.projectImage}
            />
          </View>
          <Text style={[styles.projectDescription, styles.white]}>
            For my final project in a class about real time rendering, I
            developed a comic book style shader. This project was made in GLSL,
            and consists of various shader files that contribute to a stylistic
            final render. The key components of the shaders are outlining, line
            shading, light discretization and dot shading.
            <p />
            The render above shows an untextured model being rendered through
            this shader.
            <p />
            The project repository can be found{" "}
            <a
              href="https://github.com/SugaryLump/ComicShader"
              style={styles.link}
            >
              here
            </a>
            .
          </Text>
        </Card>
        <Card>
          <Text style={[styles.projectName, styles.white]}>
            <b>GlutBall (2022)</b>
          </Text>
          <View style={styles.tagsContainer}>
            <Tag name="Personal" color="yellow" />
            <Tag name="Graphics" color="pink" />
            <Tag name="C++" color="red" />
            <Tag name="OpenGL" color="brown" />
          </View>
          <View
            style={{
              borderWidth: 2,
              borderColor: colors.darkAccent,
              borderRadius: 5,
              overflow: "hidden",
            }}
          >
            <img
              src={require("./assets/projects/glutball/screenie.png")}
              style={styles.projectImage}
            />
          </View>
          <Text style={[styles.projectDescription, styles.white]}>
            This is a small, silly project made while I was taking an
            introductory class on computer graphics. I made it for fun to apply
            some basic <i>gamification</i> to the OpenGL graphics programming
            that I was studying in class (namely, the usage of vertex buffer
            objects for optimizing the rendering of many polygons).
            <p />
            The program consists of a basic free roam first person camera
            surrounded by walls and a floor (rudimentary collision detection) on
            which you bounce spheres that can be launched in a variety of ways,
            mimicking different firearms (machine gun, shotgun, exploding
            rocket, pistol).
            <p /> The project repository can be found{" "}
            <a
              href="https://github.com/sugarylump/glutball"
              style={styles.link}
            >
              here
            </a>
            .
          </Text>
          <View
            style={{
              borderWidth: 2,
              borderColor: colors.darkAccent,
              borderRadius: 5,
              overflow: "hidden",
            }}
          >
            <img
              src={require("./assets/projects/glutball/demo.gif")}
              style={styles.projectImage}
            />
          </View>
        </Card>
        <Card>
          <Text style={[styles.projectName, styles.white]}>
            <b>RASBet Web Design (2022)</b>
          </Text>
          <View style={styles.tagsContainer}>
            <Tag name="Academic" color="blue" />
            <Tag name="Figma" color="pink" />
            <Tag name="Web Design" color="lightBlue" />
          </View>
          <View
            style={{
              borderWidth: 2,
              borderColor: colors.darkAccent,
              borderRadius: 5,
              overflow: "hidden",
            }}
          >
            <img
              src={require("./assets/projects/rasbet/M_Apostar.png")}
              style={styles.projectImage}
            />
          </View>
          <Text style={[styles.projectDescription, styles.white]}>
            <b>RASBet</b> is a betting website developed for a class on
            software specification. In a group with 3 other class mates, my job
            in this project was designing the website mockups for formal
            specification and later implementation.
            <p />
            The designs were made using{" "}
            <a style={styles.link} href="https://www.figma.com">
              Figma
            </a>
            . The workflow consisted of creating robust, flex-based components
            that I could reuse throughout the various designs, which were then
            shared with my colleagues for discussion and adjustments. The design
            was based on other popular betting websites.
            <p />
            The final project can be found{" "}
            <a href="https://github.com/pta2002/rasbet" style={styles.link}>
              here
            </a>
            .
          </Text>
          <View
            style={{
              borderWidth: 2,
              borderColor: colors.darkAccent,
              borderRadius: 5,
              overflow: "hidden",
            }}
          >
            <img
              src={require("./assets/projects/rasbet/M_histTransacoes.png")}
              style={styles.projectImage}
            />
          </View>
        </Card>
        <Card>
          <Text style={[styles.projectName, styles.white]}>
            <b>GPU optimized k-means clustering algorithm (2022)</b>
          </Text>
          <View style={styles.tagsContainer}>
            <Tag name="Academic" color="blue" />
            <Tag name="CUDA" color="neonGreen" />
            <Tag name="C++" color="red" />
          </View>
          <View
            style={{
              borderWidth: 2,
              borderColor: colors.darkAccent,
              borderRadius: 5,
              overflow: "hidden",
            }}
          >
            <img
              src={require("./assets/projects/kmeans/cudalogo.jpg")}
              style={styles.projectImage}
            />
          </View>
          <Text style={[styles.projectDescription, styles.white]}>
            This project was made for a class on parallel computing, for which
            we had to implement an optimized k-means clustering algorithm
            utilizing parallelization. The final version of this project
            utilizes CUDA to achieve GPU based parallel computing, and is able
            to sort 100 million points over 64 clusters in roughly half a second
            on a consumer grade GPU at 99% average occupancy.
            <p />
            The final implementation can be found on{" "}
            <a
              href="https://github.com/SugaryLump/CP-2022/tree/cuda-gpuinit"
              style={styles.link}
            >
              this branch
            </a>
            , which also includes the paper I wrote on our observations and
            testing.
          </Text>
        </Card>
        <Card>
          <Text style={[styles.projectName, styles.white]}>
            <b>Tourism App Frontend</b>
          </Text>
          <View style={styles.tagsContainer}>
            <Tag name="Academic" color="blue" />
            <Tag name="React Native" color="jetBlue" />
            <Tag name="Expo" color="lightGrey" />
            <Tag name="Javascript" color="salmon" />
          </View>
          <View
            style={{
              borderWidth: 2,
              borderColor: colors.darkAccent,
              borderRadius: 5,
              overflow: "hidden",
            }}
          >
            <img
              src={require("./assets/projects/li4/li4_1.png")}
              style={styles.projectImage}
            />
          </View>
          <Text style={[styles.projectDescription, styles.white]}>
            This project was made for a general IT class with a focus on full
            stack development and formal specifications. In a group of four, we
            implemented a basic tourism app that was formally specified by
            another group of students.
            <p />
            My job in this project was implementing the frontend for Android,
            which I did using React Native and the Expo framework. Backend
            integration was later implemented by my colleagues.
            <p />
            The project repository can be found{" "}
            <a href="https://github.com/SugaryLump/LI4/" style={styles.link}>
              here
            </a>
            .
          </Text>
          <View
            style={{
              borderWidth: 2,
              borderColor: colors.darkAccent,
              borderRadius: 5,
              overflow: "hidden",
            }}
          >
            <img
              src={require("./assets/projects/li4/li4_2.png")}
              style={styles.projectImage1}
            />
          </View>
        </Card>
      </View>
      <hr style={styles.ruler} />
      <Text style={[styles.smallText, styles.white, { alignSelf: "center" }]}>
        This rough little website was made by me in a few hours in React Native
        + Javascript, in 2023
      </Text>
    </View>
  );
}

//Styling
const colors = {
  accent: "#0d0f17",
  darkAccent: "#ff144f",
  background: "#E4DFFF",

  yellow: "#deb72c",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "top",
    flexDirection: "column",
    alignItems: "stretch",
    padding: isHorizontalScreen() ? "20%" : "10%",
    paddingTop: "1%",
    paddingBottom: "1%",
  },
  header: {
    alignItems: "center",
    gap: "20px",
    borderColor: "red",
  },
  shadows: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: "10px",
    elevation: 2,
  },
  logo: {
    imageRendering: "pixelated",
    width: isHorizontalScreen() ? "25%" : "90%",
  },
  logoText: {
    fontFamily: "Daydream",
    fontSize:
      Dimensions.get("window").width * (isHorizontalScreen() ? 0.03 : 0.07),
  },
  ruler: {
    color: colors.darkAccent,
    width: "100%",
  },
  headerText: {
    fontFamily: "Rubik",
    fontSize: isHorizontalScreen() ? 20 : 18,
    lineHeight: 30,
  },
  link: {
    textDecorationLine: "none",
    color: colors.darkAccent,
  },
  card: {
    borderWidth: 2,
    borderColor: colors.darkAccent,
    borderRadius: 5,
    width: isHorizontalScreen() ? "49%" : "100%",
    padding: isHorizontalScreen() ? "2%" : "3%",
    paddingBottom: "0%",
    gap: 10,
    height: Dimensions.get("window").height * 0.5,
    overflow: "hidden",
  },
  cardExpanded: {
    borderWidth: 2,
    borderColor: colors.darkAccent,
    borderRadius: 5,
    width: isHorizontalScreen() ? "49%" : "100%",
    padding: isHorizontalScreen() ? "2%" : "3%",
    gap: 10,
  },
  cardsContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "stretch",
    gap: "2%",
    alignSelf: "stretch",
    flexWrap: "wrap",
    rowGap: 20,
    padding: "2%",
    marginTop: 20,
    marginBottom: 25,
  },
  projectName: {
    fontFamily: "Rubik",
    fontSize: 18,
  },
  tagText: {
    fontFamily: "Rubik",
  },
  tagContainer: {
    borderRadius: 10,
    overflow: "hidden",
    padding: 4,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  projectDescription: {
    fontFamily: "Rubik",
    fontSize: 16,
  },
  projectImage: {
    width: "100%",
    height: "auto",
  },
  projectImage2: {
    width: "50%",
    height: "auto",
  },
  smallText: {
    fontFamily: "Rubik",
    fontSize: 14,
  },

  lightRedBG: {
    backgroundColor: colors.accent,
  },
  darkRed: {
    color: colors.darkAccent,
  },
  white: {
    color: colors.background,
  },
  whiteBG: {
    backgroundColor: colors.background,
  },
});
