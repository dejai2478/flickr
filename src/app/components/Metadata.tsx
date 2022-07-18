import { MetadataContainer} from "./StyledComponents";
import {TEST_IDS} from "../utils/Constants";

type Props = {
    totalNumber: number,
    showing: number,
}

const Metadata = ({totalNumber, showing}: Props) => {
    return <MetadataContainer>
        <span data-testid={TEST_IDS.metadata}>
        {`Showing ${showing} out of ${totalNumber}`}
        </span>
    </MetadataContainer>
}

export default Metadata