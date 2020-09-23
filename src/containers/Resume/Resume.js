import React from 'react';
import {connect} from 'react-redux';
import * as ResumeActions from '../../store/actions/allActions';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const Resume = props =>{
    return(
    <Container maxWidth='md'>
        <Paper variant='outlined' style={{padding:'10%'}}>
            <Grid container>
                <Grid item>
                    
                </Grid>
            </Grid>
        </Paper>
    </Container>
    );
}

const mapStateToProps = state =>{
    return {
        name:state.profile.name,
        email: state.profile.email,
        phone: state.profile.phone,
        city: state.profile.city,
        education: state.profile.education,
        jobs: state.profile.jobs,
        internships: state.profile.internships,
        projects: state.profile.projects,
        skills: state.profile.skills,
        links: state.profile.links,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        setName: (name) => dispatch(ResumeActions.setName(name)),
        setProfileEmail: (email) => dispatch(ResumeActions.setProfileEmail(email)),
        setPhone: (phone) => dispatch(ResumeActions.setPhone(phone)),
        setCity: (city) => dispatch(ResumeActions.setCity(city)),
        addEducation: (education) => dispatch(ResumeActions.addEducation(education)),
        removeEducation: (education) => dispatch(ResumeActions.removeEducation(education)),
        addJob: (job) => dispatch(ResumeActions.addPrevJob(job)),
        removeJob: (job) => dispatch(ResumeActions.removePrevJob(job)),
        addInternship: (internship) => dispatch(ResumeActions.addInternship(internship)),
        removeInternship: (internship) => dispatch(ResumeActions.removeInternship(internship)),
        addProject: (project) => dispatch(ResumeActions.addProject(project)),
        removeProject: (project) => dispatch(ResumeActions.removeProject(project)),
        addSkill: (skill) => dispatch(ResumeActions.addSkill(skill)),
        removeSkill: (skill) => dispatch(ResumeActions.removeSkill(skill)),
        addLink: (link) => dispatch(ResumeActions.addLink(link)),
        removeLink: (link) => dispatch(ResumeActions.removeLink(link)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Resume);