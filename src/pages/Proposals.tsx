import { ProposalList } from "@daohaus/moloch-v3-macro-ui";
import { Link, SingleColumnLayout } from "@daohaus/ui";
import { TARGET_DAO } from "../targetDao";

export const Proposals = () => {
  return (
    <SingleColumnLayout>
      <Link
        href={`https://admin.daohaus.club/#/molochv3/${TARGET_DAO.CHAIN_ID}/${TARGET_DAO.DAO_ADDRESS}/proposals`}
      >
        Go to full DAO Admin
      </Link>
      <ProposalList header="Articles" allowLinks={true} />
    </SingleColumnLayout>
  );
};
