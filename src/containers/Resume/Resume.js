import React from 'react';
import {connect} from 'react-redux';
import * as ResumeActions from '../../store/actions/allActions';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Education from '../../components/Education/Education';
import Job from '../../components/Job/Job';
import Internship from '../../components/Internship/Internship';
import Project from '../../components/Project/Project';
import SkillTag from '../../components/DeletableSkillTag/DeletableSkillTag';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

const Resume = props =>{

    let educationCode = null;
    let jobCode = null;
    let internshipCode = null;
    let projectCode = null;
    let skillCode = null;
    let linkCode = null;

    function getModalStyle() {
        const top = 30;
        const left = 30;

        return {
            top: `${top}vh`,
            left: `${left}vw`,
            transform: `translate(-${top}%, -${left}%)`
        };
    }

    const useStyles = makeStyles((theme) => ({
        paper: {
            position: "absolute",
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: "2px solid #000",
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3)
        }
    }));

    const classes = useStyles();
    const modalStyle = getModalStyle();
    

    if(props.education.length>0){
        educationCode=props.education.map((el,index)=>(
            <Education
                type={el.type}
                institute={el.institute}
                board={el.board}
                start ={el.start}
                end = {el.end}
                percentage = {el.percentage}
                degree={el.degree}
                education={el}
                delete={props.removeEducation}
                key={index}
                />
        ))
    }

    if(props.jobs.length){
        jobCode = props.jobs.map((el,index)=>{
            return (
                <Job
                profile={el.profile}
                organisation = {el.organization}
                location = {el.location}
                start={el.start}
                end = {el.end}
                description = {el.description}
                job={el}
                delete={props.removeJob}
                key={index}
                />
            )
        })
    }

    if (props.projects.length) {
        projectCode = props.projects.map((el,index) => {
            return (
                <Project
                    title={el.title}
                    start ={el.start}
                    end = {el.end}
                    description={el.description}
                    link = {el.link}
                    project={el}
                    delete={props.removeProject}
                    key={index}
                />
            )
        })
    }

    if (props.internships.length) {
        internshipCode = props.internships.map((el,index) => {
            return (
                <Internship
                    profile={el.profile}
                    organisation={el.organization}
                    location={el.location}
                    start={el.start}
                    end={el.end}
                    description={el.description}
                    delete={props.removeInternship}
                    internship={el}
                    key={index}
                />
            )
        })
    }

    if(props.skills.length>0){
        let skillz=props.skills.map((el,index)=>{
            return(
                <SkillTag skill={el} key={index} delete={props.removeSkill}/>
            )
        })
        skillCode=(
            <div style={{display:'flex',flexWrap:'wrap'}}>
                {skillz}
            </div>
        )
    }

    if(props.links.length>0){
        let linkz = props.links.map((el,index)=>{
            return (
                <a href={el} key={index}>{el}</a>
            )
        })

        linkCode=(
            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                {linkz}
            </div>
        )
    }

    return(
    <Container maxWidth='md'>
        <Modal open={props.EducationModal} onClose={props.hideEducationModal} style={{width:'60vw'}}>
            <Paper style={modalStyle} className={classes.paper}>
                <div>
                    <h3>Education Details</h3>
                    <div>
                        <Grid container>
                            <Grid item md={12} style={{marginBottom:'1em'}}>
                                <TextField label='College' variant='outlined' />
                            </Grid>
                            <Grid item md={12} style={{ marginBottom: '1em' }}>
                                <TextField label='Start Year' variant='outlined' />
                            </Grid>
                            <Grid item md={12} style={{ marginBottom: '1em' }}>
                                <TextField label='End Year' variant='outlined' />
                            </Grid>
                            <Grid item md={12} style={{ marginBottom: '1em' }}>
                                <InputLabel id="demo-simple-select-label">Level</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    style={{minWidth:'12em'}}
                                >
                                    <MenuItem value={'secondary'}>Secondary(X)</MenuItem>
                                    <MenuItem value={'senior secondary'}>Senior Secondary(XII)</MenuItem>
                                    <MenuItem value={'undergrad'}>Undergraduate</MenuItem>
                                    <MenuItem value={'grad'}>Graduate</MenuItem>
                                    <MenuItem value={'diploma'}>Diploma</MenuItem>
                                    <MenuItem value={'pg'}>Post Graduation</MenuItem>
                                    <MenuItem value={'phd'}>Ph.D</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item md={12} style={{ marginBottom: '1em' }}>
                                <TextField label='Degree' variant='outlined' />
                            </Grid>
                            <Grid item md={12} style={{ marginBottom: '1em' }}>
                                <TextField label='Board' variant='outlined' />
                            </Grid>
                            <Grid item md={12} style={{ marginBottom: '1em' }}>
                                <TextField label='Percentage' variant='outlined' />
                            </Grid>
                            <Grid item md={12} style={{ marginBottom: '1em' }}>
                                <Button color='primary' variant='contained'>Add</Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Paper>
        </Modal>

            <Modal open={props.JobModal} onClose={props.hideJobModal} style={{ width: '60vw' }}>
                <Paper style={modalStyle} className={classes.paper}>
                    <div>
                        <h3>Add Job Details</h3>
                        <div>
                            <Grid container>
                                <Grid item md={12} style={{ marginBottom: '1em' }}>
                                    <TextField label='Profile' fullWidth variant='outlined' />
                                </Grid>
                                <Grid item md={12} style={{ marginBottom: '1em' }}>
                                    <TextField label='Organisation' fullWidth variant='outlined' />
                                </Grid>
                                <Grid item md={12} style={{ marginBottom: '1em' }}>
                                    <TextField label='Location' fullWidth variant='outlined' />
                                </Grid>
                                <Grid item md={12} style={{ marginBottom: '1em' }}>
                                    <TextField label='Start Year' variant='outlined' />
                                </Grid>
                                <Grid item md={12} style={{ marginBottom: '1em' }}>
                                    <TextField label='End Year' variant='outlined' />
                                </Grid>
                                <Grid item md={12} style={{ marginBottom: '1em' }}>
                                    <TextField label='Description' multiline fullWidth variant='outlined' />
                                </Grid>
                                <Grid item md={12} style={{ marginBottom: '1em' }}>
                                    <Button color='primary' variant='contained'>Add</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Paper>
            </Modal>

            <Modal open={props.InternshipModal} onClose={props.hideInternshipModal} style={{ width: '60vw' }}>
                <Paper style={modalStyle} className={classes.paper}>
                    <div>
                        <h3>Add Internship Details</h3>
                        <div>
                            <Grid container>
                                <Grid item md={12} style={{ marginBottom: '1em' }}>
                                    <TextField label='Profile' fullWidth variant='outlined' />
                                </Grid>
                                <Grid item md={12} style={{ marginBottom: '1em' }}>
                                    <TextField label='Organisation' fullWidth variant='outlined' />
                                </Grid>
                                <Grid item md={12} style={{ marginBottom: '1em' }}>
                                    <TextField label='Location' fullWidth variant='outlined' />
                                </Grid>
                                <Grid item md={12} style={{ marginBottom: '1em' }}>
                                    <TextField label='Start Year' variant='outlined' />
                                </Grid>
                                <Grid item md={12} style={{ marginBottom: '1em' }}>
                                    <TextField label='End Year' variant='outlined' />
                                </Grid>
                                <Grid item md={12} style={{ marginBottom: '1em' }}>
                                    <TextField label='Description' multiline fullWidth variant='outlined' />
                                </Grid>
                                <Grid item md={12} style={{ marginBottom: '1em' }}>
                                    <Button color='primary' variant='contained'>Add</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Paper>
            </Modal>
            <Modal open={props.ProjectModal} onClose={props.hideProjectModal} style={{ width: '60vw' }}>
                <Paper style={modalStyle} className={classes.paper}>
                    <div>
                        <h3>Add Project Details</h3>
                        <div>
                            <Grid container>
                                <Grid item md={12} style={{ marginBottom: '1em' }}>
                                    <TextField label='Title' fullWidth variant='outlined' />
                                </Grid>
                                <Grid item md={12} style={{ marginBottom: '1em' }}>
                                    <TextField label='Start Year' variant='outlined' />
                                </Grid>
                                <Grid item md={12} style={{ marginBottom: '1em' }}>
                                    <TextField label='End Year' variant='outlined' />
                                </Grid>
                                <Grid item md={12} style={{ marginBottom: '1em' }}>
                                    <TextField label='Description' multiline fullWidth variant='outlined' />
                                </Grid>
                                <Grid item md={12} style={{ marginBottom: '1em' }}>
                                    <TextField label='Link' fullWidth variant='outlined' />
                                </Grid>
                                <Grid item md={12} style={{ marginBottom: '1em' }}>
                                    <Button color='primary' variant='contained'>Add</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Paper>
            </Modal>
            <Modal open={props.SkillModal} onClose={props.hideSkillModal} style={{ width: '60vw' }}>
                <Paper style={modalStyle} className={classes.paper}>
                    <div>
                        <h3>Add Skill</h3>
                        <div>
                            <Grid container>
                                <Grid item md={12} style={{ marginBottom: '1em' }}>
                                    <TextField label='Skill' fullWidth variant='outlined' />
                                </Grid>
                                <Grid item md={12} style={{ marginBottom: '1em' }}>
                                    <Button color='primary' variant='contained'>Add</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Paper>
            </Modal>
            <Modal open={props.LinkModal} onClose={props.hideLinkModal} style={{ width: '60vw' }}>
                <Paper style={modalStyle} className={classes.paper}>
                    <div>
                        <h3>Add Link</h3>
                        <div>
                            <Grid container>
                                <Grid item md={12} style={{ marginBottom: '1em' }}>
                                    <TextField label='Link' fullWidth variant='outlined' />
                                </Grid>
                                <Grid item md={12} style={{ marginBottom: '1em' }}>
                                    <Button color='primary' variant='contained'>Add</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Paper>
            </Modal>

        <Paper variant='outlined' style={{padding:'10%'}}>
            <Grid container>
                <Grid item md={3} style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                    <h2><b>{props.name}</b></h2>
                    <p>{props.email}</p>
                    <p>{props.phone}</p>
                    <p>{props.city}</p>
                </Grid>
                <Grid item md={12}>
                    <Divider />
                </Grid>
                <Grid item md={3}>
                    <p style={{fontSize:'1rem'}}>Education</p>
                    <IconButton onClick={props.showEducationModal}>
                        <AddIcon/>
                    </IconButton>
                </Grid>
                <Grid item md={8}>
                    {educationCode}
                </Grid>
                <Grid item md={12}>
                    <Divider/>
                </Grid>
                <Grid item md={3}>
                    <p style={{ fontSize: '1rem' }}>Jobs</p>
                    <IconButton onClick={props.showJobModal}>
                        <AddIcon />
                    </IconButton>
                </Grid>
                <Grid item md={8}>
                    {jobCode}
                </Grid>
                <Grid item md={12}>
                    <Divider />
                </Grid>
                <Grid item md={3}>
                    <p style={{ fontSize: '1rem' }}>Internships</p>
                    <IconButton onClick={props.showInternshipModal}>
                        <AddIcon />
                    </IconButton>
                </Grid>
                <Grid item md={8}>
                    {internshipCode}
                </Grid>
                <Grid item md={12}>
                    <Divider />
                </Grid>
                <Grid item md={3}>
                    <p style={{ fontSize: '1rem' }}>Projects</p>
                    <IconButton onClick={props.showProjectModal}>
                        <AddIcon />
                    </IconButton>
                </Grid>
                <Grid item md={8}>
                    {projectCode}
                </Grid>
                <Grid item md={12}>
                    <Divider />
                </Grid>
                <Grid item md={3}>
                    <p style={{ fontSize: '1rem' }}>Skills</p>
                    <IconButton onClick={props.showSkillModal}>
                        <AddIcon />
                    </IconButton>
                </Grid>
                <Grid item md={8}>
                    {skillCode}
                </Grid>
                <Grid item md={12}>
                    <Divider />
                </Grid>
                <Grid item md={3}>
                    <p style={{ fontSize: '1rem' }}>Links</p>
                    <IconButton onClick={props.showLinkModal}>
                        <AddIcon />
                    </IconButton>
                </Grid>
                <Grid item md={8}>
                    {linkCode}
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
        EducationModal:state.resume.showEducationModal,
        JobModal: state.resume.showJobModal,
        InternshipModal: state.resume.showInternshipModal,
        ProjectModal: state.resume.showProjectModal,
        SkillModal: state.resume.showSkillModal,
        LinkModal: state.resume.showLinkModal
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
        showEducationModal:()=>dispatch(ResumeActions.showEducationModal()),
        hideEducationModal:()=>dispatch(ResumeActions.hideEducationModal()),
        showJobModal: () => dispatch(ResumeActions.showJobModal()),
        hideJobModal: () => dispatch(ResumeActions.hideJobModal()),
        showInternshipModal: () => dispatch(ResumeActions.showInternshipModal()),
        hideInternshipModal: () => dispatch(ResumeActions.hideInternshipModal()),
        showProjectModal: () => dispatch(ResumeActions.showProjectModal()),
        hideProjectModal: () => dispatch(ResumeActions.hideProjectModal()),
        showSkillModal: () => dispatch(ResumeActions.showSkillModal()),
        hideSkillModal: () => dispatch(ResumeActions.hideSkillModal()),
        showLinkModal: () => dispatch(ResumeActions.showLinkModal()),
        hideLinkModal: () => dispatch(ResumeActions.hideLinkModal()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Resume);