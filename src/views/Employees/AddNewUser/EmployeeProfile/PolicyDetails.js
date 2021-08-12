import { Fragment } from 'react'
import classnames from 'classnames'
import { isObjEmpty } from '@utils'
import { useForm } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { Label, FormGroup, Row, Col, Button, Form, Input } from 'reactstrap'

const PolicyDetails = ({ stepper, type }) => {
    const { register, errors, handleSubmit, trigger } = useForm()

    const onSubmit = () => {
        trigger()
        if (isObjEmpty(errors)) {
            stepper.next()
        }
    }

    return (
        <Fragment>
            <div className='content-header'>
                <h5 className='mb-0'>Address</h5>
                <small>Enter Your Address.</small>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <FormGroup tag={Col} md='6'>
                        <Label className='form-label' for={`policyPlan-${type}`}>
                            policy Plan
                        </Label>
                        <Input
                            type='select'
                            name={`policyPlan-${type}`}
                            id={`policyPlan-${type}`}
                            innerRef={register({ required: false })}
                            className={classnames({ 'is-invalid': errors[`policyPlan-${type}`] })}
                        >
                            <option>Select...</option>
                        </Input>
                    </FormGroup>
                    <FormGroup tag={Col} md='6'>
                        <Label className='form-label' for={`policyType-${type}`}>
                            Policy Type
                        </Label>
                        <Input
                            type='select'
                            name={`policyType-${type}`}
                            id={`policyType-${type}`}
                            innerRef={register({ required: false })}
                            className={classnames({ 'is-invalid': errors[`policyType-${type}`] })}
                        >
                            <option>Select...</option>
                        </Input>
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup tag={Col} md='6'>
                        <Label className='form-label' for={`policyTerm-${type}`}>
                            Policy Term
                        </Label>
                        <Input
                            type='select'
                            name={`policyTerm-${type}`}
                            id={`policyTerm-${type}`}
                            innerRef={register({ required: false })}
                            className={classnames({ 'is-invalid': errors[`policyTerm-${type}`] })}
                        >
                            <option>Select...</option>
                        </Input>
                    </FormGroup>
                    <FormGroup tag={Col} md='6'>
                        <Label className='form-label' for={`policyStartDate-${type}`}>
                            Policy Start Date
                        </Label>
                        <Input
                            type='date'
                            name={`policyStartDate-${type}`}
                            id={`policyStartDate-${type}`}
                            innerRef={register({ required: false })}
                            className={classnames({ 'is-invalid': errors[`policyStartDate-${type}`] })}
                        >
                            <option>Select...</option>
                        </Input>
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup tag={Col} md='6'>
                        <Label className='form-label' for={`renewalOn-${type}`}>
                            Renewal On
                        </Label>
                        <Input
                            type='date'
                            name={`renewalOn-${type}`}
                            id={`renewalOn-${type}`}
                            innerRef={register({ required: false })}
                            className={classnames({ 'is-invalid': errors[`renewalOn-${type}`] })}
                        >
                            <option>Select...</option>
                        </Input>
                    </FormGroup>
                    <FormGroup tag={Col} md='6'>
                        <Label className='form-label' for={`familyMembers-${type}`}>
                            Family Members
                        </Label>
                        <Input
                            type='select'
                            name={`famliyMembers-${type}`}
                            id={`familyMembers-${type}`}
                            placeholder=''
                            innerRef={register({ required: false })}
                            className={classnames({ 'is-invalid': errors[`familyMembers-${type}`] })}
                        />
                    </FormGroup>
                </Row>
                <div className='d-flex justify-content-between'>
                    <Button.Ripple color='warning' className='btn-prev' onClick={() => stepper.previous()}>
                        <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
                        <span className='align-middle d-sm-inline-block d-none'>Previous</span>
                    </Button.Ripple>
                    <Button.Ripple type='submit' color='success' className='btn-next'>
                        <span className='align-middle d-sm-inline-block d-none'>Submit</span>
                    </Button.Ripple>
                </div>
            </Form>
        </Fragment>
    )
}

export default PolicyDetails
