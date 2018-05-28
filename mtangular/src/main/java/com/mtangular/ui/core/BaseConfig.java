package com.mtangular.ui.core;

import javax.persistence.EntityManagerFactory;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

//@Configuration
public class BaseConfig {

//	@Autowired
	private EntityManagerFactory entityManagerFactory;
	
//	@Bean("misessionfactory")	
	public SessionFactory sessionFactory() throws Exception
	{
		if(entityManagerFactory.unwrap(SessionFactory.class) == null)
		{
			throw new Exception("unable to create sessionfactory!");
		}
		return entityManagerFactory.unwrap(SessionFactory.class);
	}
}
