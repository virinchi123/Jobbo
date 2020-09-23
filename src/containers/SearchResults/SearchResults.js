import React from 'react';
import classes from './SearchResults.module.css';
import JobCard from '../../components/JobCard/JobCard';
import {connect} from 'react-redux';
import * as searchActions from '../../store/actions/allActions';

const SearchResults = (props) =>{

    const toggleJob=job=>{
        if(job.expanded){
            props.contractJob(job)
        }
        else{
            props.expandJob(job)
        }
    }

    const myJobs = props.jobs;
    
    let jobCode=null;
    if(myJobs.length!==0){
        console.log(myJobs)
        jobCode=myJobs.map((job,index)=>{
            return(
                <JobCard
                    role={job.role}
                    company={job.company}
                    location={job.location}
                    salary={job.salary}
                    toggle={toggleJob}
                    expanded={job.expanded}
                    job={job}
                    key={job.id}
                />
            )
        })
    }
    console.log(myJobs.length)
    console.log(jobCode);

    return(
        <React.Fragment>
        {jobCode}
        </React.Fragment>
    )
}

const mapStateToProps = state=> {
    return {
        jobs: state.search.jobs
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        expandJob:(job)=>dispatch(searchActions.expandJob(job)),
        contractJob:(job)=>dispatch(searchActions.contractJob(job))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchResults);