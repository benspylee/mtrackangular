package com.mtangular.ui.utils.generator;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SessionImplementor;
import org.hibernate.id.IdentifierGenerator;

public class QuoteGen implements IdentifierGenerator{

	@Override
	public Serializable generate(SessionImplementor session, Object object) throws HibernateException {
		Connection con=	session.connection();
		int nextid=0;
		PreparedStatement preparedstat=null;
		ResultSet rs=null;
		try {
			preparedstat=	con.prepareStatement("select max(quoteno) as Id from quotes");
			rs=	preparedstat.executeQuery();
			while (rs.next()) {
				Object obj=	rs.getInt("Id");
				if(obj!=null)	
					nextid=(int)obj;
			}
		
			
			nextid++;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		finally{
			/*try {
				rs.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			try {
				con.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			try {
				preparedstat.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}*/
		}


		return nextid;
	}

}
