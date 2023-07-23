'use client';

import {
  Navbar, ScrollArea, Transition, createStyles,
} from '@mantine/core';
import React from 'react';

import { Responsive } from 'components/layout/Responsive';
import { MANTINE_SMARTPHONE_BREAKPOINT } from 'config/layoutConfig';
import { colors } from 'styles/colors';

import { mockData } from './mockData';
import { NavBarLinksGroup } from '../NavBarLinksGroup';

interface MainNavBarProps {
  opened: boolean;
}

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: colors.background(theme),
    paddingBottom: 0,
  },
  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
  },
  linksInner: {
    paddingBottom: theme.spacing.md,
  },
}));

export const MainNavBar: React.FC<MainNavBarProps> = (props) => {
  const { opened } = props;

  const { classes } = useStyles();
  const links = mockData.map((item) => <NavBarLinksGroup {...item} key={item.label} />);

  return (
    <>
      <Responsive.SmartPhone>
        <Transition mounted={opened} transition="scale-x" duration={200}>
          {(styles) => (
            <Navbar p="md" hiddenBreakpoint={MANTINE_SMARTPHONE_BREAKPOINT} width={{ sm: 300, lg: '100%' }} style={{ ...styles }}>
              <Navbar.Section grow className={classes.links} component={ScrollArea}>
                <div className={classes.linksInner}>{links}</div>
              </Navbar.Section>
            </Navbar>
          )}
        </Transition>
      </Responsive.SmartPhone>
      <Responsive.Desktop>
        <Navbar p="md" hiddenBreakpoint={MANTINE_SMARTPHONE_BREAKPOINT} hidden={!opened} w={300}>
          <Navbar.Section grow className={classes.links} component={ScrollArea}>
            <div className={classes.linksInner}>{links}</div>
          </Navbar.Section>
        </Navbar>
      </Responsive.Desktop>
    </>
  );
};
