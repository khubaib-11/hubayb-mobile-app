import { Tabs } from 'expo-router';
import { Heart, Home, ShoppingBag, UserCircle2 } from '@tamagui/lucide-icons';
import { mvs } from 'react-native-size-matters';
import TabBarIcon from '@/components/common/Icons/TabBarIcon/TabBarIcon';
import TabLabel from '@/components/tabs/TabLabel';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { useCart } from '@/context/cartContext';

export default function TabLayout() {
  // const colorScheme = useColorScheme();
  const { cart } = useCart();
  const badge = cart.length > 0 ? cart.length : undefined;

  return (
    <Tabs
      screenOptions={{
        // ! Enable below option when themes are implemented
        // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,

        tabBarActiveTintColor: '#1D1E22',
        tabBarInactiveTintColor: 'rgba(29, 30, 34, 0.6)',
        tabBarHideOnKeyboard: true,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        tabBarStyle: {
          // backgroundColor: 'white',
          paddingTop: 2,
          paddingBottom: 4,
          height: mvs(48),
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabel: ({ focused, color }) => (
            <TabLabel
              color={color}
              focused={focused}
              label="Home"
            />
          ),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              color={color}
              focused={focused}
              icon={Home}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="ShoppingBag"
        options={{
          // lazy: false,

          tabBarBadge: badge ?? undefined,
          title: 'ShoppingBag',
          tabBarLabel: ({ focused, color }) => (
            <TabLabel
              color={color}
              focused={focused}
              label="Bag"
            />
          ),

          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              color={color}
              focused={focused}
              icon={ShoppingBag}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Like"
        options={{
          // ? The below key hides the Likes tab. Change this behaviour when you impliment liking feature
          href: null,
          title: 'Likes',
          tabBarLabel: ({ focused, color }) => (
            <TabLabel
              color={color}
              focused={focused}
              label="Likes"
            />
          ),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              color={color}
              focused={focused}
              icon={Heart}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Account"
        options={{
          title: 'Account',
          tabBarLabel: ({ focused, color }) => (
            <TabLabel
              color={color}
              focused={focused}
              label="Account"
            />
          ),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              color={color}
              focused={focused}
              icon={UserCircle2}
            />
          ),
        }}
      />
    </Tabs>
  );
}
