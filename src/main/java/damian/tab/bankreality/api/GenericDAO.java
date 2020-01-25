package damian.tab.bankreality.api;

import damian.tab.bankreality.database.model.BaseModel;
import damian.tab.bankreality.database.model.PrimaryKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface GenericDAO<T extends BaseModel> extends JpaRepository<T, PrimaryKey> {
}
