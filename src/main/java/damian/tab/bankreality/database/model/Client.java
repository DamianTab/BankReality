package damian.tab.bankreality.database.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Data
@Inheritance(strategy = InheritanceType.JOINED)
public class Client implements PrimaryKeyAccess{

    @Id
    @NotNull
    @GeneratedValue(generator = "client_generator")
    @SequenceGenerator(name="client_generator", sequenceName = "client_sequence", initialValue = 1000000, allocationSize = 10)
    private int login;
    @NotNull
    @Column
    private String address;
    @Column
    private double phoneNumber;

    @Override
    public int receivePrimaryKey() {
        return login;
    }

    @Override
    public void setPrimaryKey(int primaryKey) {
        login = primaryKey;
    }
}
