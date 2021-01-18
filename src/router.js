import Instance from "@/ch01/Instance.vue";
import TemplateTest from "@/ch02/TemplateTest";
import ComputedPropsTest from "@/ch03/ComputedPropsTest.vue";
import WatchProperty from "@/ch04/WatchProperty.vue";

import Ch05Router from "@/ch05/Ch05Router";
import BasicBinding from "@/ch05/BasicBinding";
import ClassBinding from "@/ch05/ClassBinding";
import FormBinding from "@/ch05/FormBinding";
import ModifierBinding from "@/ch05/ModifierBinding";

import Ch06Router from "@/ch06/Ch06Router";
import Events from "@/ch06/Events.vue";
import EventModifier from "@/ch06/EventModifier";
import CustomEvent from "@/ch06/CustomEvent";

import Ch07Router from "@/ch07/Ch07Router";
import ConditionRendering from "@/ch07/ConditionRendering";
import ListRendering from "@/ch07/ListRendering";

import Ch08Router from "@/ch08/Ch08Router";
import Transition from "@/ch08/Transition";
import Animation from "@/ch08/Animation";
import CustomTransition from "@/ch08/CustomTransition";
import MethodTransition from "@/ch08/MethodTransition";

import Ch09Router from "@/ch09/Ch09Router";
import CustomDirective from "@/ch09/CustomDirective";
import CustomFilter from "@/ch09/CustomFilter";

import VueRouter from "vue-router";
import BasicRouterView from "@/components/BasicRouterView";

const routes = [
  {
    path: "/ch01",
    component: BasicRouterView,
    children: [
      {
        path: "instance",
        component: Instance,
      },
    ],
  },
  {
    path: "/ch02",
    component: BasicRouterView,
    children: [
      {
        path: "TemplateTest",
        component: TemplateTest,
      },
    ],
  },
  {
    path: "/ch03",
    component: BasicRouterView,
    children: [
      {
        path: "ComputedPropsTest",
        component: ComputedPropsTest,
      },
    ],
  },
  {
    path: "/ch04",
    component: BasicRouterView,
    children: [
      {
        path: "WatchProperty",
        component: WatchProperty,
      },
    ],
  },
  {
    path: "/ch05",
    component: Ch05Router,
    children: [
      {
        path: "BasicBinding",
        component: BasicBinding,
      },
      {
        path: "ClassBinding",
        component: ClassBinding,
      },
      {
        path: "FormBinding",
        component: FormBinding,
      },
      {
        path: "ModifierBinding",
        component: ModifierBinding,
      },
    ],
  },
  {
    path: "/ch06",
    component: Ch06Router,
    children: [
      { path: "Events", component: Events },
      { path: "EventModifier", component: EventModifier },
      { path: "CustomEvent", component: CustomEvent },
    ],
  },
  {
    path: "/ch07",
    component: Ch07Router,
    children: [
      { path: "ConditionRendering", component: ConditionRendering },
      { path: "ListRendering", component: ListRendering },
    ],
  },
  {
    path: "/ch08",
    component: Ch08Router,
    children: [
      { path: "Transition", component: Transition },
      { path: "Animation", component: Animation },
      { path: "CustomTransition", component: CustomTransition },
      { path: "MethodTransition", component: MethodTransition },
    ],
  },
  {
    path: "/ch09",
    component: Ch09Router,
    children: [
      { path: "CustomDirective", component: CustomDirective },
      { path: "CustomFilter", component: CustomFilter },
    ],
  },
];

export default new VueRouter({ routes });
