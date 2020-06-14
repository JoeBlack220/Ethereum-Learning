import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/contributeForm';
import { Link } from '../../routes';
class CampaignShow extends Component {
    static async getInitialProps(props) {
        // match the address in the wildcard in routes.
        const campaign = Campaign(props.query.address);
        const summary = await campaign.methods.getSummary().call();
        return { 
            address: props.query.address,
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        };
    }

    renderCards() {
        const {
            balance,
            manager,
            minimumContribution,
            requestsCount,
            approversCount
        } = this.props;

        const items = [
            {
                header: manager,
                meta: "Address of Manager",
                description: "The manager who created the campaign and can create request",
                style: { overflowWrap: 'break-word' }
            },
            {
                header: minimumContribution,
                meta: "Minimum Contribution (wei)",
                description: "You must contribute at least this much wei to become an approver.",
                style: { overflowWrap: 'break-word' }
            },
            {
                header: requestsCount,
                meta: "Number of Requests",
                description: "A request tries to withdraw money from contract. Request must be approved to transfer money.",
                style: { overflowWrap: 'break-word' }
            },
            {
                header: approversCount,
                meta: "Number of approvers",
                description: "Number of people who already approves this request",
                style: { overflowWrap: 'break-word' }
            },
            {
                header: web3.utils.fromWei(balance),
                meta: "Balance of the campaign",
                description: "The money left in this campaign",
                style: { overflowWrap: 'break-word' }
            },

        ]

        return <Card.Group items={items}></Card.Group>
    }

    render() {
        return (
            <Layout>
                <h3>show</h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                        {this.renderCards()}
                        </Grid.Column>
                        <Grid.Column width={6}>
                        <ContributeForm address={this.props.address} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Link route={`/campaigns/${this.props.address}/requests`}>
                                <a>
                                    <Button primary>View Requests</Button>
                                </a>
                            </Link>
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
            </Layout>
        );
    }
}

export default CampaignShow;