import {
  ListContext_default
} from "./chunk-UCZ5R6NP.js";
import {
  init_base
} from "./chunk-2KVYENWA.js";
import {
  init_styled,
  styled_default
} from "./chunk-MELOAKBC.js";
import {
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  init_esm,
  init_generateUtilityClass,
  init_useThemeProps,
  require_jsx_runtime,
  useThemeProps2 as useThemeProps
} from "./chunk-Y6KN7ZG4.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  clsx_m_default,
  init_clsx_m,
  init_extends,
  init_objectWithoutPropertiesLoose,
  require_prop_types
} from "./chunk-TGNTYD2T.js";
import {
  require_react
} from "./chunk-EDZTS3LP.js";
import {
  __toESM
} from "./chunk-TFWDKVI3.js";

// node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js
init_objectWithoutPropertiesLoose();
init_extends();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_clsx_m();
init_base();
init_styled();
init_useThemeProps();

// node_modules/@mui/material/ListItemAvatar/listItemAvatarClasses.js
init_esm();
init_generateUtilityClass();
function getListItemAvatarUtilityClass(slot) {
  return generateUtilityClass("MuiListItemAvatar", slot);
}
var listItemAvatarClasses = generateUtilityClasses("MuiListItemAvatar", ["root", "alignItemsFlexStart"]);
var listItemAvatarClasses_default = listItemAvatarClasses;

// node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["className"];
var useUtilityClasses = (ownerState) => {
  const {
    alignItems,
    classes
  } = ownerState;
  const slots = {
    root: ["root", alignItems === "flex-start" && "alignItemsFlexStart"]
  };
  return composeClasses(slots, getListItemAvatarUtilityClass, classes);
};
var ListItemAvatarRoot = styled_default("div", {
  name: "MuiListItemAvatar",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.alignItems === "flex-start" && styles.alignItemsFlexStart];
  }
})(({
  ownerState
}) => _extends({
  minWidth: 56,
  flexShrink: 0
}, ownerState.alignItems === "flex-start" && {
  marginTop: 8
}));
var ListItemAvatar = React.forwardRef(function ListItemAvatar2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiListItemAvatar"
  });
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const context = React.useContext(ListContext_default);
  const ownerState = _extends({}, props, {
    alignItems: context.alignItems
  });
  const classes = useUtilityClasses(ownerState);
  return (0, import_jsx_runtime.jsx)(ListItemAvatarRoot, _extends({
    className: clsx_m_default(classes.root, className),
    ownerState,
    ref
  }, other));
});
true ? ListItemAvatar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component, normally an `Avatar`.
   */
  children: import_prop_types.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
var ListItemAvatar_default = ListItemAvatar;

export {
  getListItemAvatarUtilityClass,
  listItemAvatarClasses_default,
  ListItemAvatar_default
};
//# sourceMappingURL=chunk-WTGTRQYX.js.map
