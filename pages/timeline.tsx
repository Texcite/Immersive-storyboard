import {NextPageWithLayout} from "@/pages/_app";
import BaseLayout from "@/layouts/base";
import DashboardLayout from "@/layouts/DashboardLayout";
import {ReactElement, useState} from "react";
import {StoryBoardTimeline} from "@/components/timeline";
import {Panel} from "@/components/timeline/panel";
import {horizontalListSortingStrategy} from "@dnd-kit/sortable";

const Timeline: NextPageWithLayout = ({}) => {
    const [panels, setPanels] = useState<Array<Panel>>([
        {
            id: "panelqq111",
            title: 'Panel 1',
            thumbnail: 'https://ple1.nigelritfeld.nl/concept/signing-contract.jpeg',
            video: 'https://584762767-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-MMujhzqaYbBEEmDxnZO%2F-MPBiS011L5t61nqKkYr%2F-MPBjPjCz5hhHlavOpZE%2FExample.png?alt=media&token=8f1b9699-24ce-42c3-9dd7-17ed4bba15a7',
            comments: "Comments",
        },
        {
            id: "sdferg1231",
            title: 'Panel 2',
            thumbnail: 'https://ple1.nigelritfeld.nl/concept/signing-contract.jpeg',
            video: 'https://584762767-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-MMujhzqaYbBEEmDxnZO%2F-MPBiS011L5t61nqKkYr%2F-MPBjPjCz5hhHlavOpZE%2FExample.png?alt=media&token=8f1b9699-24ce-42c3-9dd7-17ed4bba15a7',
            comments: "Comments",
        },
        {
            id: "sdf233g1231",
            title: 'Panel 3',
            thumbnail: 'https://ple1.nigelritfeld.nl/concept/signing-contract.jpeg',
            video: 'https://584762767-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-MMujhzqaYbBEEmDxnZO%2F-MPBiS011L5t61nqKkYr%2F-MPBjPjCz5hhHlavOpZE%2FExample.png?alt=media&token=8f1b9699-24ce-42c3-9dd7-17ed4bba15a7',
            comments: "Comments",
        },
        {
            id: "sdf4452erg1231",
            title: 'Panel 4',
            thumbnail: 'https://ple1.nigelritfeld.nl/concept/signing-contract.jpeg',
            video: 'https://584762767-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-MMujhzqaYbBEEmDxnZO%2F-MPBiS011L5t61nqKkYr%2F-MPBjPjCz5hhHlavOpZE%2FExample.png?alt=media&token=8f1b9699-24ce-42c3-9dd7-17ed4bba15a7',
            comments: "Comments",
        },
        {
            id: "sd342ferg1231",
            title: 'Panel 5',
            thumbnail: 'https://ple1.nigelritfeld.nl/concept/signing-contract.jpeg',
            video: 'https://584762767-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-MMujhzqaYbBEEmDxnZO%2F-MPBiS011L5t61nqKkYr%2F-MPBjPjCz5hhHlavOpZE%2FExample.png?alt=media&token=8f1b9699-24ce-42c3-9dd7-17ed4bba15a7',
            comments: "Comments",
        },
    ])

    return (
        <>
            <h1>Timeline</h1>
            <StoryBoardTimeline panels={panels}/>
        </>
    )
}

Timeline.getLayout = function (page: ReactElement) {
    return <BaseLayout>
        <DashboardLayout>
            {page}
        </DashboardLayout>
    </BaseLayout>
}

export default Timeline