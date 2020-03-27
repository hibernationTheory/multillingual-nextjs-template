import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { useRouter } from "next/router";

import {
  locales,
  languageNames,
  useTranslation,
} from "src/utilities/translations";

const useStyles = makeStyles(theme => {
  return {
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    select: {
      color: theme.palette.common.white,
    },
  };
});

export const LocaleSwitcher = () => {
  const classes = useStyles();
  const router = useRouter();
  const { locale } = useTranslation();

  const handleChange = React.useCallback(
    e => {
      const regex = new RegExp(`^/(${locales.join("|")})`);
      router.push(
        router.pathname,
        router.asPath.replace(regex, `/${e.target.value}`)
      );
    },
    [router]
  );

  return (
    <FormControl className={classes.formControl}>
      <Select
        value={locale}
        onChange={handleChange}
        displayEmpty
        className={classes.select}
      >
        {locales.map(locale => (
          <MenuItem key={locale} value={locale}>
            {languageNames[locale]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
