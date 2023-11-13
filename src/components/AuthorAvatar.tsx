// ExampleComponent.tsx
// import styled from 'styled-components';
import { AddressDisplay, ParSm, ProfileAvatar } from '@daohaus/ui';
import { useProfile } from '@daohaus/moloch-v3-hooks';
import { TARGET_DAO } from '../targetDao';
 
 
export const AuthorAvatar = (
    { address }: { address: string }
) => {
    const { profile } = useProfile({
        address
      });
    console.log("profile >>", profile);
  return (
    <div>
      <ProfileAvatar size='lg' address={address} />
      {profile?.ens && (<ParSm>{profile.ens}</ParSm>)}
      <AddressDisplay truncate explorerNetworkId={TARGET_DAO.CHAIN_ID} address={address} />
    </div>
  );
};