import NoAccountFound from '@/components/account/NoAccountFound/NoAccountFound';
import Column from '@/components/common/Column/Column';
import { H24 } from '@/components/common/Typography/Headings';
import { ms24, ms4, ms8, mvs16, mvs32, mvs8 } from '@/constants/responsiveUnits';
import { useUser } from '@/context/authContext';
import { View } from '@tamagui/core';
import { Image } from 'expo-image';
import { Tabs } from 'expo-router';
import DEFAULT_PROFILE_PHOTO from '../../assets/images/icon.png';
import { L16, L18, L20, L30 } from '@/components/common/Typography/Labels';
import Row from '@/components/common/Row/Row';
import {
  ChevronRight,
  Clock,
  MapPin,
  MapPinOff,
  MapPinned,
  UserCircle2,
} from '@tamagui/lucide-icons';
import { P16 } from '@/components/common/Typography/Paragraph';
import React from 'react';
import { mvs } from 'react-native-size-matters';

export default function Account() {
  const { userSession } = useUser();
  return (
    <View
      bg="$white"
      f={1}
      px={ms24}
    >
      <Tabs.Screen
        options={{
          headerShown: false,
        }}
      />
      {!userSession && <NoAccountFound />}
      {userSession && <AccountMenu />}
    </View>
  );
}

function AccountMenu() {
  const { user } = useUser();

  return (
    <Column gap={mvs16}>
      <Column
        ai="center"
        gap={mvs16}
        mt={mvs32}
      >
        <Image
          source={DEFAULT_PROFILE_PHOTO}
          style={{
            width: 100,
            height: 100,
            borderRadius: 100,
          }}
          contentFit="contain"
        />
        <L30>{user?.user_metadata.userName}</L30>
      </Column>
      <Column gap={mvs(10)}>
        <AccountMenuItem menuLabel="Profile">
          <UserCircle2
            size={24}
            color="$black"
          />
        </AccountMenuItem>
        <AccountMenuItem menuLabel="Order history">
          <Clock
            size={24}
            color="$black"
            strokeWidth={2}
          />
        </AccountMenuItem>
        <AccountMenuItem menuLabel="Add new address">
          <MapPinned
            size={24}
            color="$black"
            strokeWidth={2}
          />
        </AccountMenuItem>
      </Column>
    </Column>
  );
}

function AccountMenuItem({
  children,
  menuLabel = 'No label',
  onPress,
}: {
  children: React.ReactNode;
  menuLabel: string;
  onPress: () => void;
}) {
  return (
    <Row
      onPress={onPress}
      pressStyle={{ bg: '$skeleton50' }}
      jc="space-between"
      ai="center"
      h={48}
      bbw={1}
      bbc="$black20"
      pb={ms4}
    >
      <Row
        gap={ms8}
        ai="center"
      >
        {children}
        <L18>{menuLabel}</L18>
      </Row>
      <ChevronRight
        size={24}
        color="$black"
        strokeWidth={2}
      />
    </Row>
  );
}
