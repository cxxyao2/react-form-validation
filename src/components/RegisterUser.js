import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

export default function RegisterUser() {
  // form validation rules
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    firstName: Yup.string().required().required('Firstname is required'),
    lastName: Yup.string().required('Last name is required'),
    dob: Yup.date().required('Date of Birth is qureid'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is invalid'),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Password must match'
    ),
    terms: Yup.bool().oneOf([true], 'Accept is required')
  })

  const formOptions = { resolver: yupResolver(validationSchema) }
  const { register, handleSubmit, reset, formState } = useForm(formOptions)
  const { errors } = formState

  const onSubmit = (data) => {
    alert('Success!!' + JSON.stringify(data))
    return false
  }

  return (
    <div className='w-4/5 mx-auto my-8'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-12 gap-4 border border-gray-400 p-2 justify-items-begin items-center text-left'>
          <div className='col-span-12 md:col-span-2'>Title</div>
          <div className='col-span-12 md:col-span-5'>FirstName</div>
          <div className='col-span-12 md:col-span-5'>LastName</div>
          <div className='col-span-12 md:col-span-2'>
            <select
              name='title'
              id='title'
              {...register('title')}
              className='outline outline-indigo-400 w-4/5 p-1 rounded-sm'>
              <option value=''></option>
              <option value='Mrs'>Mrs</option>
              <option value='Ms'>Miss</option>
              <option value='Mr'>Mr</option>
            </select>
          </div>

          <div className='col-span-12 md:col-span-5'>
            <input
              name='firstName'
              id='firstName'
              {...register('firstName')}
              type='text'
              className='outline outline-indigo-400 w-4/5 p-1 rounded-sm'
            />
          </div>

          <div className='col-span-12 md:col-span-5'>
            <input
              name='lastName'
              id='lastName'
              {...register('lastName')}
              type='text'
              className='outline outline-indigo-400 w-4/5 p-1 rounded-sm'
            />
          </div>

          <div className='col-span-12 md:col-span-6'>Date of Birth</div>
          <div className='col-span-12 md:col-span-6'>Email</div>
          <div className='col-span-12 md:col-span-6'>
            <input
              name='dob'
              id='dob'
              type='date'
              {...register('dob')}
              className='outline outline-indigo-400 w-4/5 p-1 rounded-sm'
            />
          </div>
          <div className='col-span-12 md:col-span-6'>
            <input
              name='email'
              id='email'
              type='email'
              {...register('email')}
              className='outline outline-indigo-400 w-4/5 p-1 rounded-sm'
            />
          </div>

          <div className='col-span-12 md:col-span-6'>Password</div>
          <div className='col-span-12 md:col-span-6'>Confirm Password</div>

          <div className='col-span-12 md:col-span-6'>
            <input
              name='password'
              id='password'
              type='password'
              {...register('password')}
              className='outline outline-indigo-400 w-4/5 p-1 rounded-sm'
            />
          </div>

          <div className='col-span-12 md:col-span-6'>
            <input
              name='confirmPassword'
              id='confirmPassword'
              type='password'
              {...register('confirmPassword')}
              className='outline outline-indigo-400 w-4/5 p-1 rounded-sm'
            />
          </div>

          <div className='col-span-12   text-red-400'>
            {errors.title?.message}
          </div>
          <div className='col-span-12  text-red-400'>
            {errors.firstName?.message}
          </div>

          <div className='col-span-12  text-red-400'>
            {errors.lastName?.message}
          </div>

          <div className='col-span-12  text-red-400'>{errors.dob?.message}</div>

          <div className='col-span-12  text-red-400'>
            {errors.email?.message}
          </div>

          <div className='col-span-12  text-red-400'>
            {errors.password?.message}
          </div>

          <div className='col-span-12  text-red-400'>
            {errors.title?.confirmPassword}
          </div>

          <div className='col-span-12'>
            <input type='checkbox' id='terms' name='terms' checked />
            <label htmlFor='terms'>Accept Terms Conditons</label>
          </div>
          <div className='col-span-12 flex justify-start m-2 space-x-6'>
            <button
              type='submit'
              className='rounded-md text-white bg-indigo-600 px-2 py-1'>
              Register
            </button>
            <button
              type='button'
              onClick={() => reset()}
              className='rounded-md  text-black px-2 py-1 bg-gray-200'>
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
