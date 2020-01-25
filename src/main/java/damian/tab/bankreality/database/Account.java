package damian.tab.bankreality.database;

import lombok.Data;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Date;

@Entity
@Data
//For foreign and primary key at the same time
@Embeddable
public class Account {
    @Id
    @NotNull
    @GeneratedValue(generator = "account_generator")
    @SequenceGenerator(name = "account_generator", sequenceName = "account_sequence", initialValue = 2000000, allocationSize = 10)
    private int accountNumber;

    @NotNull
    @Column
    private double balance;

    @NotNull
    @Column
    private double feesAmount;

    @Column
    @Type(type = "date")
    private Date creationDate;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "login")
    private Client client;
}
