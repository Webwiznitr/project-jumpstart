import React from 'react'
import { Partners, SubHeading } from '../theme'
import { Grid } from '@material-ui/core'

export default function index() {
    return (
        <Partners>
            <h3>Some cool subheading sochenge</h3>
            <SubHeading>Some cool subheading sochenge</SubHeading>
            <div className="grid">
                <Grid container spacing={0}>
                    <Grid item xs={6} sm={4} md={3} lg={2}>
                        <img className="grid_item" src="https://www.freeiconspng.com/thumbs/github-icon/github-icon-9.png" alt="logo" />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={2}>
                        <img className="grid_item" src="https://www.freeiconspng.com/thumbs/github-icon/github-icon-9.png" alt="logo" />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={2}>
                        <img className="grid_item" src="https://www.freeiconspng.com/thumbs/github-icon/github-icon-9.png" alt="logo" />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={2}>
                        <img className="grid_item" src="https://www.freeiconspng.com/thumbs/github-icon/github-icon-9.png" alt="logo" />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={2}>
                        <img className="grid_item" src="https://www.freeiconspng.com/thumbs/github-icon/github-icon-9.png" alt="logo" />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={2}>
                        <img className="grid_item" src="https://www.freeiconspng.com/thumbs/github-icon/github-icon-9.png" alt="logo" />
                    </Grid>
                </Grid>
            </div>
        </Partners>
    )
}
